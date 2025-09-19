import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  standalone: false,
  templateUrl: './listar-tarefa.html',
  styleUrl: './listar-tarefa.css'
})
export class ListarTarefa {

  tarefas: string[] = [
    'Estudar Angular',
    'Fazer exercícios',
    'Revisar código'
  ];

  novaTarefa: string = '';

  adicionarTarefa() {
    const tarefa = this.novaTarefa.trim();
    if (tarefa) {
      this.tarefas.push(tarefa);

      this.novaTarefa = '';
    }
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }


}
