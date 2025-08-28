import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Catalogo } from './catalogo/catalogo';

const routes: Routes = [
  {
    path: 'itens',
    component: Catalogo
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
