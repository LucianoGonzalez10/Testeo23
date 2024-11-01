import { inject, Injectable } from '@angular/core';
import { Producto } from '../interface/producto.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(private http: HttpClient) {}  
  
  urlBase: string = "http://localhost:3000/productos"
  
getProducto():Observable<Producto[]>{
  return this.http.get<Producto[]>(this.urlBase);
}

postProducto(producto: Producto):Observable<Producto>{
  return this.http.post<Producto>(this.urlBase, producto);
}
}
