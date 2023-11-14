import { Component } from '@angular/core';

@Component({
  selector: 'app-efectivo-caja',
  templateUrl: './efectivo-caja.component.html',
  styleUrls: ['./efectivo-caja.component.css'],
})
export class EfectivoCajaComponent {
  public billetes: string = '';
  public monedas: string = '';
  public otros: string = '';
  public total: string = '';

  constructor() {
    this.billetes = '27.849.000,00';
    this.monedas = '234.700,00';
    this.otros = '';
    this.total = '28.083.700,00';
  }
}
