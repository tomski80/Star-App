import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarsComponent } from './stars/stars.component';

import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'stars/:id', component: DetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
