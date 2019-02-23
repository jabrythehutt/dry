import {UserEntity} from '../data/user.entity';
import {Entity} from 'aws-sdk/clients/comprehend';

export interface Analysis extends UserEntity {
  noteId: string;
  entities: Entity[];
}
