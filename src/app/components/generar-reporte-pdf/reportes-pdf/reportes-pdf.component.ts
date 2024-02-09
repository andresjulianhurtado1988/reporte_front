import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-reportes-pdf',
  templateUrl: './reportes-pdf.component.html',
  styleUrls: ['./reportes-pdf.component.css'],
})
export class ReportesPDFComponent {
  public form: FormGroup;
  today = new Date();

  public invalidButton: boolean;
  public reporte: boolean;

  public AllJoyerias: any[] = [];

  constructor(private fb: FormBuilder, private datosService: DatosService) {
    this.form = this.fb.group({
      fechaIni: ['', Validators.required],
      fechaFin: ['', Validators.required],
      joyeria_id: [[], Validators.required],
    });

    this.invalidButton = true;
    this.reporte = false;
    this.cargarData;
    this.allJoyerias();
  }

  allJoyerias() {
    this.datosService.allJoyerias().subscribe((resp) => {
      this.AllJoyerias = resp.joyerias;
    });
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
    var fechaIni = new Date();
    var fechaFin = new Date();
    var optionsFechaIni = { day: 'numeric', month: 'numeric', year: 'numeric' };
    var optionsFechaFin = { day: 'numeric', month: 'numeric', year: 'numeric' };
    var misTiendas = [1, 3, 5, 7, 4];

    fechaIni = this.form.value['fechaIni'].toLocaleDateString(
      'es-ES',
      optionsFechaIni
    );

    fechaFin = this.form.value['fechaFin'].toLocaleDateString(
      'es-ES',
      optionsFechaFin
    );

    const datosFilter = {
      misTiendas: misTiendas,
      fechaIni: fechaIni,
      fechaFin: fechaFin,
    };

    this.datosService.generarPdf(datosFilter).subscribe((resp) => {
      const filename = 'pdfContable.pdf';
      var fileURL = URL.createObjectURL(resp);
      window.open(fileURL, '_blank');
    });
  }

  generarExcel() {
    this.datosService.generarExcel().subscribe((respuesta) => {
      const filename = 'reporte.xlsx';
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(respuesta);
      link.download = filename;
      link.click();
    });
  }

  reportePdfConsolidado() {
    const datosFilter = {
      misTiendas: this.form.value['joyeria_id'],
      fechaIni: this.form.value['fechaIni'].toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      }),

      fechaFin: this.form.value['fechaFin'].toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      }),
    };

    this.datosService.reportePdfConsolidado(datosFilter).subscribe((resp) => {
      const filename = 'pdfDatosConsolidado.pdf';
      var fileURL = URL.createObjectURL(resp);
      window.open(fileURL, '_blank');
    });
  }
}
