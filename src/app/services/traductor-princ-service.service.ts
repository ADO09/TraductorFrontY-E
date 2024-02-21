import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, delay, map, catchError, of } from 'rxjs';
import { environment as ENV } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class TraductorPrincServiceService {
  constructor(private http: HttpClient) {}

  public url = ENV.url;

  getTraduccion(): Observable<{
    data: any;
  }> {
    const response = { data: [] as any[] };
    console.log(this.url + 'tasks');
    return this.http.get<{ data: any[] }>(this.url + 'tasks').pipe(
      delay(100),
      map((r) => {
        console.log(r);

        return r;
      }),
      catchError(() => of(response))
    );
  }

  postTraduccion(oracion: any): Observable<{
    data: any;
    traduccion: any;
  }> {
    console.log(this.url + 'traducir,', oracion);
    return this.http
      .post<{
        traduccion: any;
        data: any;
      }>(this.url + 'traducir', { oracion })
      .pipe(
        delay(100),
        map((r) => {
          console.log(r);

          return r;
        })
      );
  }



  postTraduccionYE(oracion: any): Observable<{
    data: any;
    traduccion: any;
  }> {
    console.log(this.url + 'traducirYE,', oracion);
    return this.http
      .post<{
        traduccion: any;
        data: any;
      }>(this.url + 'traducirYE', { oracion })
      .pipe(
        delay(100),
        map((r) => {
          console.log(r);

          return r;
        })
      );
  }
}
