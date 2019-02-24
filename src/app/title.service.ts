import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  colour = 'primary';
  title = 'DRY';

  constructor() { }
}
