import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  standalone: false,
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {

  produtos = [
    { nome: 'Produto 1', preco: 100 },
    { nome: 'Produto 2', preco: 200 },
    { nome: 'Produto 3', preco: 300 }
  ];
}
