import { Component } from '@angular/core';
import { datos_tabla } from 'src/app/globlas/datos-totales';

@Component({
  selector: 'app-totales',
  templateUrl: './totales.component.html',
  styleUrls: ['./totales.component.css'],
})
export class TotalesComponent {
  public saldo_inicial: string = '';
  public total_ingresos_egresos: string = '';
  public saldo_actual_caja: string = '';
  public usuario_estacion: string = '';
  public estacion_trabajo: string = '';

  constructor() {
    this.saldo_inicial = '18.018.996,76';
    this.total_ingresos_egresos = '10.064.704,00';
    this.saldo_actual_caja = '28.083.700,76';
    this.usuario_estacion = 'ANLOPEZ';
    this.estacion_trabajo = 'SERVIDOR01';
  }
}
