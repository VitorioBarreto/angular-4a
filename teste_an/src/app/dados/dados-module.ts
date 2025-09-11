import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosRoutingModule } from './dados-routing-module';
import { Tabela } from './tabela/tabela';
import { MatTableModule } from '@angular/material/table';
import { Botao } from '../shared/botao/botao';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    Tabela
  ],
  imports: [
    CommonModule,
    DadosRoutingModule,
    MatTableModule,

    SharedModule


  ]
})
export class DadosModule { }
