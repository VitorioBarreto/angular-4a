import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing-module';
import { ListaProdutos } from './lista-produtos/lista-produtos';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    ListaProdutos
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule
  ],
  exports: [
    ListaProdutos
  ]
})
export class ProdutosModule { }
