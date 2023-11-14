import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public form: FormGroup;
  today = new Date();

  public invalidButton: boolean;
  public reporte: boolean;

  constructor(private fb: FormBuilder, private datosService: DatosService) {
    this.form = this.fb.group({
      fechaIni: ['', Validators.required],
      fechaFin: ['', Validators.required],
    });

    this.invalidButton = true;
    this.reporte = false;
    this.cargarData;
  }

  enviarDatos() {
    this.invalidButton = false;
    this.reporte = true;
  }

  cargarData() {
    this.form.reset({
      fechaIni: this.today,
      fechaFin: this.today,
    });
  }

  generarPdf() {
    // var fechaIni = new Date();
    // var fechaFin = new Date();
    // var optionsFechaIni = { day: 'numeric', month: 'numeric', year: 'numeric' };
    // var optionsFechaFin = { day: 'numeric', month: 'numeric', year: 'numeric' };

    // var misTiendas = [1, 3, 5, 7, 4];

    // fechaIni = this.form.value['fechaIni'].toLocaleDateString(
    //   'es-ES',
    //   optionsFechaIni
    // );

    // fechaFin = this.form.value['fechaFin'].toLocaleDateString(
    //   'es-ES',
    //   optionsFechaFin
    // );

    // const datosFilter = {
    //   misTiendas: misTiendas,
    //   fechaIni: fechaIni,
    //   fechaFin: fechaFin,
    // };
    var datosFilter = 'algo';
    this.datosService.generarPdf(datosFilter).subscribe((resp) => {
      const filename = 'pdfContable.pdf';
      var fileURL = URL.createObjectURL(resp);
      window.open(fileURL, '_blank');

      // el método de abajo, me permite descargar directamente el pdf
      // var link = document.createElement('a');
      // link.href = window.URL.createObjectURL(resp);
      // link.download = filename;
      // link.click();
    });
  }

  viendoDatos() {
    this.datosService.pruebaRuta().subscribe((respuesta) => {
      console.log(respuesta);
    });
    console.log('entrando al console');
  }
}
