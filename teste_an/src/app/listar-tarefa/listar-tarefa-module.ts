import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListarTarefaRoutingModule } from './listar-tarefa-routing-module';
import { ListarTarefa } from './listar-tarefa/listar-tarefa';


@NgModule({
  declarations: [
    ListarTarefa
  ],
  imports: [
    CommonModule,
    FormsModule,
    ListarTarefaRoutingModule
  ]
})
export class ListarTarefaModule { }
