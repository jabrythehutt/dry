import { Injectable } from '@angular/core';
import {CognitoIdentityAwsServiceFactory} from '@djabry/aws-factory/examples/cognito.identity.aws.service.factory';
import { CognitoIdentityCredentials } from 'aws-sdk/lib/credentials/cognito_identity_credentials';
import * as stack from '../../.serverless/stack.json';
import {config} from 'aws-sdk/global';

config.region = stack.region;

@Injectable({
  providedIn: 'root'
})
export class AwsService extends CognitoIdentityAwsServiceFactory {

  constructor() {
    super(new CognitoIdentityCredentials({IdentityPoolId: ''}));
  }
}
