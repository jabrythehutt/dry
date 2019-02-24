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
}
