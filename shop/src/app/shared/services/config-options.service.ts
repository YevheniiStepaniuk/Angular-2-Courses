import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {
  private config: any;

  configure(config: any) {
    this.config = config;
  }

  getConfig() {
    return this.config;
  }
}
