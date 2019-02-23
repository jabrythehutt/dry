import {Entity} from 'aws-sdk/clients/comprehend';

export interface AnalysisSection {
  noteId: string;
  entity: Entity;
}
