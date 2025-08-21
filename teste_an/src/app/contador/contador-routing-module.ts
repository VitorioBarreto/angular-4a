import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Conta } from './conta/conta';

const routes: Routes = [
  {
      path: 'contar',
      component: Conta
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContadorRoutingModule { }
