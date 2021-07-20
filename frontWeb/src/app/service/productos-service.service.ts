import { Injectable } from "@angular/core";
import { Productos } from "../modelos/productos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductosService {
    private servicioURL: string;
    private headers: any;

  constructor(private http: HttpClient) {}
  
  definirContexto(contextoBase: string, token: string) {
    this.servicioURL = contextoBase ;
    this.headers = new Headers({'Content-Type': 'application/json;charset=UTF-8', 'token': token});
  }



  public listar(estado: number): Observable<Productos> {
    const url = this.servicioURL + 'productos/'+ estado
    return this.http.get<Productos>(url);
  }
  
  private handleError(error: any): Promise<any> {
    // new ValidaSesion().procesarErrorTokenInvalido(error);
    return Promise.reject(error.message || error);
  }
}