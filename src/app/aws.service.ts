import { Injectable } from '@angular/core';
import {CognitoIdentityAwsServiceFactory} from '@djabry/aws-factory/examples/cognito.identity.aws.service.factory';
import { CognitoIdentityCredentials } from 'aws-sdk/lib/credentials/cognito_identity_credentials';

@Injectable({
  providedIn: 'root'
})
export class AwsService extends CognitoIdentityAwsServiceFactory {

  constructor() {
    super(new CognitoIdentityCredentials({IdentityPoolId: ''}));
  }
}
