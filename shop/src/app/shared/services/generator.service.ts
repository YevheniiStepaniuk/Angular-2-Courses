import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {

  constructor(private length: number) { }

  generate(): string {
    let result = '';
    for (let index = 0; index < this.length; index++) {
      result += AllowedSymbols.charAt(Math.random() * AllowedSymbols.length);
    }
    return result;
  }
}

export const AllowedSymbols = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
