import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor() {

  }

  transform(input: string, searchTerm: string): string {
    const re = new RegExp(searchTerm, 'gi');
    return input.replace(re, `<span class='highlight'>${searchTerm}</span>` );
  }

}
