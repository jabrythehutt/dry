import { Injectable } from '@angular/core';
import {Entity} from '../data/entity';
import {Note} from './note';
import {AwsService} from '../aws.service';
import {UserEntityDao} from '../data/user.entity.dao';

const indexName = 'userId-index';

@Injectable({
  providedIn: 'root'
})
export class NoteDaoService extends UserEntityDao<Entity, Note> {

  constructor(awsService: AwsService) {
    super(awsService.dynamodb(), 'bar', indexName);
  }
}
