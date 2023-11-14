import { Component } from '@angular/core';
import { datos_tabla } from 'src/app/globlas/datos-detalle-egresos-dastos';

@Component({
  selector: 'app-detalle-egresos-gastos',
  templateUrl: './detalle-egresos-gastos.component.html',
  styleUrls: ['./detalle-egresos-gastos.component.css'],
})
export class DetalleEgresosGastosComponent {
  public displayedColumns: string[] = [];
  public datosTabla: any[] = [];
  public datosTotal: any[] = [];

  constructor() {
    this.displayedColumns = ['tipo_gasto', 'valor_iva', 'subtotal', 'valor'];

    this.datosTabla = datos_tabla.misDatos;
    this.datosTotal = [
      {
        tipo_gasto: 'TOTAL',
        valor_iva: '569.491,00',
        subtotal: '5.540.840,00',
        valor: '5.875.384,00',
      },
    ];

    this.datosTabla = this.datosTabla.concat(this.datosTotal);
  }
}
