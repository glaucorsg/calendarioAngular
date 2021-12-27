import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private snackBar: MatSnackBar) { }

  success(mensagem: string): void{
    this.abrirSnackBar(mensagem, ['success']);
  }

  error(mensagem: string): void{
    this.abrirSnackBar(mensagem, ['error']);
  }

  warning(mensagem: string): void{
    this.abrirSnackBar(mensagem, ['warning']);
  }

  info(mensagem: string): void{
    this.abrirSnackBar(mensagem, ['info']);
  }

  private abrirSnackBar(mensagem: string, classesExtras: string[]): void{
    const snackConfig = new MatSnackBarConfig();
    snackConfig.duration = 7500;
    snackConfig.politeness = 'assertive';
    snackConfig.panelClass = classesExtras;
    this.snackBar.open(mensagem, 'X', snackConfig);
  }
}
