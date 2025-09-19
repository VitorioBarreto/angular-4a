import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bemvindo } from './bemvindo/bemvindo';

const routes: Routes = [
 {
  path: 'bemvindo',
  component: Bemvindo
 },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisaoRoutingModule { }
