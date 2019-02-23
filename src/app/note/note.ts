import {Entity} from '../data/entity';

export interface Note extends Entity {
  userId: string;
  text: string;
}
