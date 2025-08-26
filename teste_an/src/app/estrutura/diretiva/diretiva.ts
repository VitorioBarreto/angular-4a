import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {


  listaAlunos = [
    { id: 1, nome: 'Vitório', status: 'ativo' },
    { id: 2, nome: 'Alemo', status: 'inativo' },
    { id: 3, nome: 'Gustavos', status: 'ativo' },
  ];


  toggleStatus() {
    for (let aluno of this.listaAlunos) {
      aluno.status = aluno.status === 'ativo' ? 'inativo' : 'ativo';
    }

  }


  tamanhoFonte = '20px';

  plusFont() {
    this.tamanhoFonte = (parseInt(this.tamanhoFonte) + 10) + 'px';
  }

  minusFont() {
    this.tamanhoFonte = (parseInt(this.tamanhoFonte) - 10) + 'px';
  }

}

