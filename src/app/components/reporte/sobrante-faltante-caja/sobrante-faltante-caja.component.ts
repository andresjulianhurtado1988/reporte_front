import { Component } from '@angular/core';

@Component({
  selector: 'app-sobrante-faltante-caja',
  templateUrl: './sobrante-faltante-caja.component.html',
  styleUrls: ['./sobrante-faltante-caja.component.css'],
})
export class SobranteFaltanteCajaComponent {
  public sobrante: string = '';
  public faltante: string = '';

  constructor() {
    this.sobrante = ',00';
    this.faltante = ',76';
  }
}
