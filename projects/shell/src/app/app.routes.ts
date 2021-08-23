import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

// const MF2_URL = 'http://localhost:4000/remoteEntry.js';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: `search`,
    loadChildren: () => import('mf1/Module').then((m) => m.SearchModule),
  },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteEntry: MF2_URL,
  //       remoteName: 'mf2',
  //       exposedModule: './Module',
  //     }).then((m) => m.AdminModule),
  // },
];
