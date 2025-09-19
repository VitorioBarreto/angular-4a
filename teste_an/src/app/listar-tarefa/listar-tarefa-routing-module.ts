import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTarefa } from './listar-tarefa/listar-tarefa';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarTarefa
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarTarefaRoutingModule { }
