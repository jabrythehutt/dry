import { Injectable } from '@angular/core';
import {AwsService} from '../aws.service';
import Comprehend from 'aws-sdk/clients/comprehend';
import {Entity} from 'aws-sdk/clients/comprehend';
import {ClassType} from '@djabry/aws-factory/src/class.type';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor(private awsService: AwsService) { }

  async getEntities(text: string): Promise<Entity[]> {
    const comprehend = await this.awsService.getService(Comprehend as any as ClassType<Comprehend>);
    // TODO: Split text into multiple parts if it's too long
    const data = await comprehend.detectEntities({
      LanguageCode: 'en',
      Text: text
    }).promise();
    return data.Entities;
  }

}
