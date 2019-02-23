import { Injectable } from '@angular/core';
import {UserEntityDao} from '../data/user.entity.dao';
import {Analysis} from './analysis';
import {Entity} from '../data/entity';
import {AwsService} from '../aws.service';
import * as stack from '../../../.serverless/stack.json';

@Injectable({
  providedIn: 'root'
})
export class AnalysisDaoService extends UserEntityDao<Entity, Analysis> {

  constructor(awsService: AwsService) {
    super(awsService.dynamodb(), stack.analysisTableName);
  }
}
