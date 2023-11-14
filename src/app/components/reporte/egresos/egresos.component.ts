import { Component } from '@angular/core';
import { datos_tabla } from 'src/app/globlas/datos-egresos';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css'],
})
export class EgresosComponent {
  public datosTabla: any[] = [];
  public total: string;

  constructor() {
    this.datosTabla = datos_tabla.misDatos;
    this.total = '9.090.384,00';
  }
}
