import {Entity} from './entity';

/**
 * Represents an entity associated with a user
 */
export interface UserEntity extends Entity {
  userId: string;
}
