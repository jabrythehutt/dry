import { Injectable } from '@angular/core';
import {CognitoIdentityAwsServiceFactory} from '@djabry/aws-factory/examples/cognito.identity.aws.service.factory';
import * as stack from '../../.serverless/stack.json';
import {CognitoIdentityCredentials, config} from 'aws-sdk/global';
import {DocumentClient} from 'aws-sdk/lib/dynamodb/document_client';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';

config.region = stack.region;

@Injectable({
  providedIn: 'root'
})
export class AwsService extends CognitoIdentityAwsServiceFactory {

  private db: DocumentClient;

  constructor() {
    super(new CognitoIdentityCredentials({IdentityPoolId: stack.identityPoolId}));
  }

  async dynamodb(): Promise<DocumentClient> {
    await this.authenticate();
    this.db = this.db || new DynamoDB.DocumentClient();
    return this.db;

  }
}
