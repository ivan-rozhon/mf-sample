import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: 'mf1-search', component: SearchComponent }]),
  ],
  exports: [],
  declarations: [SearchComponent],
  providers: [],
})
export class SearchModule {}
