import { Component } from '@angular/core';
import { datos_tabla } from 'src/app/globlas/datos-detalle-contratos-nuevos';
@Component({
  selector: 'app-detalle-contratos-nuevos',
  templateUrl: './detalle-contratos-nuevos.component.html',
  styleUrls: ['./detalle-contratos-nuevos.component.css'],
})
export class DetalleContratosNuevosComponent {
  public displayedColumns: string[] = [];
  public datosTabla: any[] = [];
  public datosTotal: any[] = [];

  constructor() {
    this.displayedColumns = [
      'descripcion',
      'gramos',
      'valor_articulos',
      'promedio',
    ];

    this.datosTabla = datos_tabla.misDatos;
    this.datosTotal = [
      {
        descripcion: 'TOTAL',
        gramos: '23,42',
        valor_articulos: '3.215.000,00',
        promedio: '137.275,83',
      },
    ];

    this.datosTabla = this.datosTabla.concat(this.datosTotal);
  }
}
