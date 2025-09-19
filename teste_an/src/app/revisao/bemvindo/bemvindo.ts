import { Component } from '@angular/core';

@Component({
  selector: 'app-bemvindo',
  standalone: false,
  templateUrl: './bemvindo.html',
  styleUrl: './bemvindo.css'
})
export class Bemvindo {

 logado = false;

 alterar() {
  this.logado = !this.logado;
 }

 mensagemBv = 'Bem vindo!.'
 mensagemDeslog = 'Você precisa logar'

}
