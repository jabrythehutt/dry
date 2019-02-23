import { Injectable } from '@angular/core';
import * as md5 from 'js-md5';

@Injectable({
  providedIn: 'root'
})
export class HashService {

  constructor() { }

  getHash(input: string): string {
    const hash = md5.create();
    hash.update(input);
    return hash.hex();
  }
}
