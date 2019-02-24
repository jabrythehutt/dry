import {config, SharedIniFileCredentials} from 'aws-sdk/global';
import * as stack from '../.serverless/stack.json';
import {Entity} from '../src/app/data/entity';
import {User} from '../src/app/user/user';
import {Dao} from '../src/app/data/dao';
import {Note} from '../src/app/note/note';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import {Analysis} from '../src/app/analysis/analysis';
import {HashService} from '../src/app/data/hash.service';
import Comprehend from 'aws-sdk/clients/comprehend';
const creds = new SharedIniFileCredentials({profile: stack.profile});
config.credentials = creds;
config.region = stack.region;
const hashService = new HashService();


async function wipe(dao: Dao<Entity, Entity>) {
  const allItems = await dao.list();
  await dao.delete(allItems.map(item => ({id: item.id})));
}

async function seed() {
  const db = new DynamoDB.DocumentClient();
  const dbPromise = Promise.resolve(db);
  const userDao = new Dao<Entity, User>(dbPromise, stack.usersTableName);
  const noteDao = new Dao<Entity, Note>(dbPromise, stack.notesTableName);
  const analysisDao = new Dao<Entity, Analysis>(dbPromise, stack.analysisTableName);
  const comprehend: Comprehend = new (Comprehend as any)();

  console.log('Wiping all tables');
  await wipe(userDao);
  await wipe(noteDao);
  await wipe(analysisDao);
  console.log('Creating new users and notes');
  const usersAndNotes = createUsersAndNotes();
  for (const entry of usersAndNotes) {
    await userDao.save([entry.user]);
    await noteDao.save(entry.notes);

    for (const note of entry.notes) {
      const data = await comprehend.detectEntities({
        Text: note.text,
        LanguageCode: 'en'
      }).promise();
      const entities = data.Entities;
      await analysisDao.save([
        {
          id: note.id,
          entities,
          userId: note.userId
        }
      ]);
    }

  }

}

function toNote(user: User, text: string): Note {
  const noteId = hashService.getHash(user.id + text);
  return {
    userId: user.id,
    text,
    id: noteId
  };
}

function createUsersAndNotes(): Array<{user: User, notes: Note[]}> {
  const usersNamesAndNotes: Array<{name: string, notes: string[]}> = [
    {
      name: 'Andrew',
      notes: [
        'Andrew is 17 years old and was referred to us on March 29th 2018, after he was approached while sleeping rough in Manchester.\n' +
        ' He claims to have been sexually abused by his step-father between from the age of 14 and decided to leave just after turning 16.'
      ]
    }
  ];

  return usersNamesAndNotes.map(entry => {
    return {
      user: {
        name: entry.name,
        id: entry.name.toLowerCase()
      },
      notes: entry.notes
    };
  }).map(entry => {
    return {
      user: entry.user,
      notes: entry.notes.map(n => toNote(entry.user, n))
    };
  });

}


seed();
