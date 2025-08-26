import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {

nome = 'vitorio'
caminhoImagem = 'image.png'


sayHi() {
  this.nome = "Aluno do qaurto B"
}

listaItens = ['Item 1', 'Item 2', 'Item 3']
mostrarMensagem = false;

  isDestaque = true;
  hasError = false;

  corFundo = 'blue';
  tamanhoFonte = '20px';


toggleMensagem() {
  this.mostrarMensagem = !this.mostrarMensagem;
  this.isDestaque = !this.isDestaque;
  this.hasError = !this.hasError;
  this.tamanhoFonte = '40px';
  this.corFundo = this.corFundo === 'blue' ? 'red' : 'blue';
}

}
