import { Injectable } from '@angular/core';
import {Entity} from '../data/entity';
import {Note} from './note';
import {AwsService} from '../aws.service';
import {UserEntityDao} from '../data/user.entity.dao';
import {User} from '../user/user';
import {HashService} from '../data/hash.service';
import * as stack from '../../../.serverless/stack.json';

@Injectable({
  providedIn: 'root'
})
export class NoteDaoService extends UserEntityDao<Entity, Note> {

  constructor(awsService: AwsService,
              private hashService: HashService) {
    super(awsService.dynamodb(), stack.notesTableName);
  }

  async saveNote(note: Note): Promise<void> {
    const db = await this.dbPromise;
    // Don't save the same not twice
    const idExpressionAttributes = this.toExpressionAttributes('id', note.id);
    try {
      await db.put({
        TableName: this.tableName,
        ExpressionAttributeNames: {
          [idExpressionAttributes.keyName]: idExpressionAttributes.key
        },
        Item: {
          ...note,
          lastModified: (new Date()).toISOString()
        },
        ConditionExpression: `attribute_not_exists(${idExpressionAttributes.keyName})`
      }).promise();
      this.modified.emit([note]);
    } catch (err) {
      if (err.code !== 'ConditionalCheckFailedException') {
        throw err;
      }
    }
  }

  createNote(user: User, text: string ): Note {
    const id = this.hashService.getHash(user.id + text);
    return {
      userId: user.id,
      text,
      id
    };
  }
}
