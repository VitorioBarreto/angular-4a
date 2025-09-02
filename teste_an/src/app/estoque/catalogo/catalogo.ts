import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {

  produtos = [
    { nome: 'Notebook', preco: 2399, estoque: 5 },
    { nome: 'Pão', preco: 30, estoque: 0 },
    { nome: 'Celular', preco: 14.99, estoque: 50 }
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

  aumentarEstoque() {
    for (let produto of this.produtos) {
      produto.estoque += 1;
    }
  }

  diminuirEstoque() {
    for (let produto of this.produtos) {
      produto.estoque -= 1;
    }

  
  }


}
