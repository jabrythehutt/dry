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
    const users = await super.list();
    return users.sort((u1, u2) => u1.name.localeCompare(u2.name));
  }
}
