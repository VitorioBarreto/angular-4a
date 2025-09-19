import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RevisaoRoutingModule } from './revisao-routing-module';
import { Bemvindo } from './bemvindo/bemvindo';



@NgModule({
  declarations: [
    Bemvindo,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RevisaoRoutingModule
  ]
})
export class RevisaoModule { }
