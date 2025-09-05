import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-component',
  standalone: false,
  templateUrl: './listar-component.html',
  styleUrl: './listar-component.css'
})
export class ListarComponent {

  usuarios = [
    {
      nome: 'Lela', cargo: 'Psicóloga'
    },
    {
      nome: 'Laiana', cargo: 'Psicóloga'
    }
  ]
}
