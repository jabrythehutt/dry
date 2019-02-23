import { Injectable } from '@angular/core';
import {Dao} from '../data/dao';
import {Entity} from '../data/entity';
import {User} from './user';
import {AwsService} from '../aws.service';
import {Optional} from '../data/optional';

@Injectable({
  providedIn: 'root'
})
export class UserDaoService extends Dao<Entity, User>  {

  private users = ['James', 'Richard', 'Jane', 'Oliver'].map(name => ({name, id: name}));

  constructor(awsService: AwsService) {
    super(awsService.dynamodb(), 'foo');
  }

  async list(): Promise<User[]> {
    return this.users;
  }

  async find(key: Entity): Promise<Optional<User>> {
    return Optional.of(this.users.find(u => u.id === key.id));
  }
}
