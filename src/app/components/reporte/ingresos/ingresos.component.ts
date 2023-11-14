import { Component } from '@angular/core';
import { datos_tabla } from 'src/app/globlas/datos-ingresos';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
})
export class IngresosComponent {
  public datosTabla: any[] = [];
  public total: string;

  constructor() {
    this.datosTabla = datos_tabla.misDatos;
    this.total = '19.155.088,00';
  }
}
