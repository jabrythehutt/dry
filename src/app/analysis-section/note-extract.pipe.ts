import { Pipe, PipeTransform } from '@angular/core';
import {Entity} from 'aws-sdk/clients/comprehend';

@Pipe({
  name: 'noteExtract'
})
export class NoteExtractPipe implements PipeTransform {

  transform(value: string, entity: Entity, textPadding: number = 40): any {
    const elipsis = '...';
    return elipsis + value.substring(Math.max(entity.BeginOffset - textPadding, 0),
      Math.min(entity.EndOffset + textPadding, value.length)) + elipsis;
  }

}
