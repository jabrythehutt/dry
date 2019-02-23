import {UserEntity} from '../data/user.entity';

export interface Note extends UserEntity {
  text: string;
}
