import { Component } from '@angular/core';
import { datos_tabla } from 'src/app/globlas/datos-detalle-ventas-articulo';

@Component({
  selector: 'app-detalle-venta-articulos',
  templateUrl: './detalle-venta-articulos.component.html',
  styleUrls: ['./detalle-venta-articulos.component.css'],
})
export class DetalleVentaArticulosComponent {
  public displayedColumns: string[] = [];
  public datosTabla: any[] = [];
  public datosTotal: any[] = [];

  constructor() {
    this.displayedColumns = [
      'descripcion',
      'grm',
      'valor_iva',
      'subtotal',
      'total',
    ];

    this.datosTabla = datos_tabla.misDatos;
    this.datosTotal = [
      {
        descripcion: 'Totales',
        grm: '1,10',
        valor_iva: '57.062,27',
        subtotal: '300.327,73',
        total: '357.390,00',
      },
    ];

    this.datosTabla = this.datosTabla.concat(this.datosTotal);
  }
}
