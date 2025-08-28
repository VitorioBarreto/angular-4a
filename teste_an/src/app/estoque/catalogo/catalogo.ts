import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {

  produtos = [
    { nome: 'Produto 1', preco: 10.99, estoque: 5 },
    { nome: 'Produto 2', preco: 12.99, estoque: 0 },
    { nome: 'Produto 3', preco: 14.99, estoque: 50 }
  ];


  aumentar() {
      for (let produto of this.produtos) {
          produto.preco *= 1.1;
      }
  }

  reduzir() {
      for (let produto of this.produtos) {
          produto.preco *= 0.9;
      }
  }


}
