import {Dao} from './dao';
import {UserEntity} from './user.entity';
import {DocumentClient} from 'aws-sdk/lib/dynamodb/document_client';
import QueryInput = DocumentClient.QueryInput;

export class UserEntityDao<K, V extends UserEntity & K> extends Dao<K, V> {

  constructor(dbPromise: Promise<DocumentClient>, tableName: string, public indexName: string) {
    super(dbPromise, tableName);
  }

  findByUserId(userId: string): Promise<V[]> {
    const userIdExpressionAttributes = this.toExpressionAttributes('userId', userId);
    const query: QueryInput = {
      TableName: this.tableName,
      IndexName: this.indexName,
      KeyConditionExpression: `${userIdExpressionAttributes.keyName} = ${userIdExpressionAttributes.valueName}`,
      ExpressionAttributeNames: {
        [userIdExpressionAttributes.keyName as string]: userIdExpressionAttributes.key as string
      },
      ExpressionAttributeValues: {
        [userIdExpressionAttributes.valueName as string]: userIdExpressionAttributes.value as string
      }
    };
    return this.findAll(query);
  }
}
