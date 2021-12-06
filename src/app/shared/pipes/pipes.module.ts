import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfPipe} from "./cpf.pipe";
import {LetraMaiusculaPipe} from "./letra-maiuscula.pipe";
import {DataPipe} from "./data.pipe";



@NgModule({
  declarations: [LetraMaiusculaPipe, CpfPipe, DataPipe],
  imports: [
    CommonModule
  ],
  exports: [
    LetraMaiusculaPipe,
    CpfPipe,
    DataPipe
  ]
})
export class PipesModule { }
