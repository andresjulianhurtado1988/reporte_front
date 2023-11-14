import { Component } from '@angular/core';

@Component({
  selector: 'app-rango-factura-documentos',
  templateUrl: './rango-factura-documentos.component.html',
  styleUrls: ['./rango-factura-documentos.component.css'],
})
export class RangoFacturaDocumentosComponent {
  public rangos: string = '';
  public facturas_ventas: string = '';
  public facturas_resoluciones: string = '';
  public facturas_resoluciones2: string = '';
  public facturas_prorrogas: string = '';

  constructor() {
    this.rangos = '26332/26335';
    this.facturas_ventas = 'EDEV1366/EDEV1366';
    this.facturas_resoluciones = 'CDNR206/CDNR206';
    this.facturas_resoluciones2 = 'EDER3614/EDER3618';
    this.facturas_prorrogas = 'EDEP5055/EDEP5061';
  }
}
