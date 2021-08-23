import { Injectable } from '@angular/core';

export interface Microfrontend {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
  displayName: string;
  routePath: string;
  ngModuleName: string;
}

@Injectable({ providedIn: 'root' })
export class AppService {
  private _mfConfig: Microfrontend[] = [];

  constructor() {}

  get mfConfig(): Microfrontend[] {
    return this._mfConfig;
  }

  updateMfConfig(config: Microfrontend[]): void {
    this._mfConfig = [...config];
  }
}
