import { Component } from '@angular/core';
import { datos_tabla } from 'src/app/globlas/datos-detalle-otros-ingresos';

@Component({
  selector: 'app-detalle-otros-ingresos',
  templateUrl: './detalle-otros-ingresos.component.html',
  styleUrls: ['./detalle-otros-ingresos.component.css'],
})
export class DetalleOtrosIngresosComponent {
  public displayedColumns: string[] = [];
  public datosTabla: any[] = [];
  public datosTotal: any[] = [];

  constructor() {
    this.displayedColumns = ['descripcion', 'valor'];

    this.datosTabla = datos_tabla.misDatos;
    this.datosTotal = [
      {
        descripcion: 'Total',
        valor: '15.994.798,00',
      },
    ];

    this.datosTabla = this.datosTabla.concat(this.datosTotal);
  }
}
