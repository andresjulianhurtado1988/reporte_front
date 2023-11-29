import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse,
  HttpEvent,
} from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  public url: string;
  public opts: any[] = [];

  constructor(public _http: HttpClient) {
    this.url = 'http://127.0.0.1:8000/api/';
  }

  reportePdf(joye: any): Observable<any> {
    let json = JSON.stringify(joye);
    let params = 'json=' + json;

    return this._http.post(this.url + 'reportePdf', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  generarPdf(datosFilter: any): Observable<Blob> {
    let json = JSON.stringify(datosFilter);
    let params = 'json=' + json;

    return this._http.post(this.url + 'generarPdf', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
      responseType: 'blob',
    });
  }

  reportePdfConsolidado(misTiendas: any): Observable<Blob> {
    let json = JSON.stringify(misTiendas);
    let params = 'json=' + json;

    return this._http.post(this.url + 'reportePdfConsolidado', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
      responseType: 'blob',
    });
  }

  pruebaRuta(): Observable<any> {
    return this._http.get(this.url + 'pruebaRuta', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  generarExcel(): Observable<any> {
    let json = 'hola mundo';
    let params = 'json=' + json;

    return this._http.post(this.url + 'generarExcel', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
      responseType: 'blob',
    });
  }
}
