import { Injectable, InjectionToken } from '@angular/core';

@Injectable()
export class ConstantsService {

  constructor() { }

  getConst() {
    return About;
  }
}

export const About = {
  application: 'Shop',
  version: '1.3',
  author: 'Yevhenii Stepaniuk'
};

export const ConstantsServiceToken = new InjectionToken<ConstantsService>('ConstantsService');
