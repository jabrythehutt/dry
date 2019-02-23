import {ExpressionAttributes} from './expression.attributes';
import {QueryInput} from 'aws-sdk/clients/dynamodb';
import {Optional} from './optional';
import {DocumentClient} from 'aws-sdk/lib/dynamodb/document_client';
import {EventEmitter} from '@angular/core';

export class Dao<K, T extends K> {

  // DynamoDB allows you to write in batches of max 25 items
  batchSize = 25;
  modified: EventEmitter<K[]> = new EventEmitter();
  deleted: EventEmitter<K[]> = new EventEmitter();

  constructor(protected dbPromise: Promise<DocumentClient>,
              protected tableName: string) {
  }

  toExpressionAttributes<V>(key: keyof T, value: V): ExpressionAttributes<keyof T, V> {
    return {
      key,
      value,
      keyName: `#${key}`,
      valueName: `:${key}`
    };
  }

  chunkArray<V>(array: V[], chunkSize: number): V[][] {
    const input = [...array];
    const results: V[][] = [];

    while (input.length) {
      results.push(input.splice(0, chunkSize));
    }

    return results;
  }

  async find(key: K): Promise<Optional<T>> {
    const db = await this.dbPromise;
    const data = await db.get({
      TableName: this.tableName,
      Key: key
    }).promise();
    return Optional.of(data.Item as T);
  }

  async findAll(query: QueryInput): Promise<T[]> {
    const results: T[] = [];
    const db = await this.dbPromise;
    let data = await db.query(query).promise();
    results.push(...data.Items as T[]);

    while (data.LastEvaluatedKey) {
      query.ExclusiveStartKey = data.LastEvaluatedKey;
      data = await db.query(query).promise();
      results.push(...data.Items as T[]);
    }

    return results;
  }

  async delete(objectsToDelete: K[]): Promise<void> {
    const batches = this.chunkArray(objectsToDelete, this.batchSize);
    const db = await this.dbPromise;
    for (const batch of batches) {
      await db.batchWrite({
        RequestItems: {
          [this.tableName]: batch.map(item => ({
            DeleteRequest: {
              Key: item
            }
          }))
        }
      }).promise();
      this.deleted.emit(batch);
    }
  }

  async save(objects: T[]): Promise<void> {
    const batches = this.chunkArray(objects, this.batchSize);
    const db = await this.dbPromise;
    for (const batch of batches) {
      const timestamp = (new Date()).toISOString();
      await db.batchWrite({
        RequestItems: {
          [this.tableName]: batch.map(item => ({
            PutRequest: {
              Item: {
                ...item,
                lastModified: timestamp
              }
            }
          }))
        }
      }).promise();
      this.modified.emit(batch);
    }

  }
}
