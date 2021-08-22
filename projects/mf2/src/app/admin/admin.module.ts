import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: 'mf2-admin', component: AdminComponent }]),
  ],
  exports: [],
  declarations: [AdminComponent],
  providers: [],
})
export class AdminModule {}
