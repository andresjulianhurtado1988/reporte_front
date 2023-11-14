import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material/material.modules';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navegacion/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/navegacion/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { IngresosComponent } from './components/reporte/ingresos/ingresos.component';
import { EgresosComponent } from './components/reporte/egresos/egresos.component';
import { DetalleVentaArticulosComponent } from './components/reporte/detalle-venta-articulos/detalle-venta-articulos.component';
import { DetalleEgresosGastosComponent } from './components/reporte/detalle-egresos-gastos/detalle-egresos-gastos.component';
import { DetalleOtrosIngresosComponent } from './components/reporte/detalle-otros-ingresos/detalle-otros-ingresos.component';
import { DetalleRetroventaContratosComponent } from './components/reporte/detalle-retroventa-contratos/detalle-retroventa-contratos.component';
import { DetalleContratosNuevosComponent } from './components/reporte/detalle-contratos-nuevos/detalle-contratos-nuevos.component';
import { RangoFacturaDocumentosComponent } from './components/reporte/rango-factura-documentos/rango-factura-documentos.component';
import { TotalesComponent } from './components/reporte/totales/totales.component';
import { EfectivoCajaComponent } from './components/reporte/efectivo-caja/efectivo-caja.component';
import { SobranteFaltanteCajaComponent } from './components/reporte/sobrante-faltante-caja/sobrante-faltante-caja.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    IngresosComponent,
    EgresosComponent,
    DetalleVentaArticulosComponent,
    DetalleEgresosGastosComponent,
    DetalleOtrosIngresosComponent,
    DetalleRetroventaContratosComponent,
    DetalleContratosNuevosComponent,
    RangoFacturaDocumentosComponent,
    TotalesComponent,
    EfectivoCajaComponent,
    SobranteFaltanteCajaComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
