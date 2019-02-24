import {UserDaoService} from '../src/app/user/user-dao.service';
import {config, SharedIniFileCredentials} from 'aws-sdk/global';
import * as stack from '../.serverless/stack.json';
import {AwsService} from '../src/app/aws.service';
import {NoteDaoService} from '../src/app/note/note-dao.service';
import {HashService} from '../src/app/data/hash.service';
import {Entity} from '../src/app/data/entity';
import {User} from '../src/app/user/user';
import {Dao} from '../src/app/data/dao';
import {Note} from '../src/app/note/note';
config.region = stack.region;
config.credentials = new SharedIniFileCredentials({profile: stack.profile});




async function seed() {
  const userDao = new Dao<Entity, User>();
  const noteDao = new Dao<Entity, Note>();

}


seed();
