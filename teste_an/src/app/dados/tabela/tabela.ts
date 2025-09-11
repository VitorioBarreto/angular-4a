import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {

  displayedColumns: string[] = ['nome', 'valor'];

  dataSource: Produto[] = [
    {name: 'coca', valor: 10},
    {name: 'pepsi', valor: 8},
    {name: 'fanta', valor: 8}
  ]

}
