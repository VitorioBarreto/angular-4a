import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing-module';
import { Botao } from './botao/botao';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    Botao
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatButtonModule
  ],
  exports: [
    Botao
  ]
})
export class SharedModule { }
