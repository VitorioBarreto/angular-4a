import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  standalone: false,
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {
    valor = 0;

    somar() {
        this.valor++;
    }

    subtrair() {
          if (this.valor > 0) {
            this.valor--;
          }


    }



}
