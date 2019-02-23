import { Injectable } from '@angular/core';
import {AwsService} from '../aws.service';
import * as Comprehend from 'aws-sdk/clients/comprehend';
import {Entity} from 'aws-sdk/clients/comprehend';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor(private awsService: AwsService) { }

  async getEntities(text: string): Promise<Entity[]> {
    const comprehend = await this.awsService.getService(Comprehend);
    // TODO: Split text into multiple parts if it's too long
    const data = await comprehend.detectEntities({
      LanguageCode: 'en',
      Text: text
    }).promise();
    return data.Entities;
  }

}
