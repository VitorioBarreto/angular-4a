import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutos } from './lista-produtos/lista-produtos';

const routes: Routes = [
  {
    path: 'lista-produtos',
    component: ListaProdutos
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
