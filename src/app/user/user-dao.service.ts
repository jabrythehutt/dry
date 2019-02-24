import { Injectable } from '@angular/core';
import {Dao} from '../data/dao';
import {Entity} from '../data/entity';
import {User} from './user';
import {AwsService} from '../aws.service';
import * as stack from '../../../.serverless/stack.json';
import {DocumentClient} from 'aws-sdk/lib/dynamodb/document_client';
import ScanInput = DocumentClient.ScanInput;

@Injectable({
  providedIn: 'root'
})
export class UserDaoService extends Dao<Entity, User>  {

  constructor(awsService: AwsService) {
    super(awsService.dynamodb(), stack.usersTableName);
  }

  async list(): Promise<User[]> {
    const db = await this.dbPromise;
    const scanRequest: ScanInput = {
      TableName: this.tableName
    };
    let data = await db.scan(scanRequest).promise();
    const results: User[] = [];
    results.push(...data.Items as User[]);
    while (data.LastEvaluatedKey) {
      scanRequest.ExclusiveStartKey = data.LastEvaluatedKey;
      data = await db.scan(scanRequest).promise();
      results.push(...data.Items as User[]);
    }
    return results;
  }
}
