import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing-module';
import { ListaProdutos } from './lista-produtos/lista-produtos';
import { SharedModule } from '../shared/shared-module';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    ListaProdutos
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule,
    MatToolbar,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
],
  exports: [
    ListaProdutos
  ]
})
export class ProdutosModule { }


