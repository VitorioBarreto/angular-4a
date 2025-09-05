import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-produtos',
  standalone: false,
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {

  constructor(private snackBar: MatSnackBar) { }

  onRuimClick() {
    this.snackBar.open('Oloco Man :(', 'Desculpa',
      {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
  }
  onTopClick() {
    this.snackBar.open('É nois mano :)', '👍', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  produtos = [
    { nome: 'Produto 1', preco: 100 },
    { nome: 'Produto 2', preco: 200 },
    { nome: 'Produto 3', preco: 300 }
  ];
  longText: string = 'Gostou da tabela de produtos?'


}
