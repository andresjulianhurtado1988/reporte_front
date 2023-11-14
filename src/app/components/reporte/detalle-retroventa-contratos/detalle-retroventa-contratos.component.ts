import { Component } from '@angular/core';
import { datos_tabla } from 'src/app/globlas/datos-detalle-retroventas-contratos';

@Component({
  selector: 'app-detalle-retroventa-contratos',
  templateUrl: './detalle-retroventa-contratos.component.html',
  styleUrls: ['./detalle-retroventa-contratos.component.css'],
})
export class DetalleRetroventaContratosComponent {
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
        gramos: '15,98',
        valor_articulos: '2.020.000,00',
        promedio: '126.408,01',
      },
    ];

    this.datosTabla = this.datosTabla.concat(this.datosTotal);
  }
}
