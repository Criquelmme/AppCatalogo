import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Product, Servicio } from '../Modelo/old';
import { Product } from '../Modelo/Prestashop';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WebServiceService {

   private key : String = "ws_key=ADAE4VEJXZK2K14SHBVUUQ9LPFKCUZWU";
   private format : String = "output_format=JSON";
  // Base url
  baseurl = 'http://mundopack.cl/api';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

   httpOptionsPlain = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    }),
    'responseType': 'text'
  };

  traeProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseurl + '/products/' +"?display=full&"+ this.key + "&" + this.format)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }


  // POST
 

  // // GET
  // getIdProductos(): Observable<Servicio[]> {
  //   return this.http.get<Servicio[]>(this.baseurl + '/products/' +"?"+ this.key + "&" + this.format)
  //   .pipe(
  //     retry(1),
  //     catchError(this.errorHandl)
  //   )
  // }

  

  getProductos(idProducto : number): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseurl + '/products/'+ idProducto +"?"+ this.key + "&" + this.format)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  getImagen(idProducto : number, idImagen : number) {
    let filename = this.baseurl + '/images/products/'+ idProducto +"/default?"+ this.key + "&" + this.format;
    return this.http.get(filename, {responseType: 'blob'})
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // // GET
  // GetIssues(): Observable<Servicio> {
  //   return this.http.get<Servicio>(this.baseurl + '/bugtracking/')
  //   .pipe(
  //     retry(1),
  //     catchError(this.errorHandl)
  //   )
  // }

  // // PUT
  // UpdateBug(id, data): Observable<Servicio> {
  //   return this.http.put<Servicio>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.errorHandl)
  //   )
  // }

  // // DELETE
  // DeleteBug(id){
  //   return this.http.delete<Servicio>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.errorHandl)
  //   )
  // }

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}