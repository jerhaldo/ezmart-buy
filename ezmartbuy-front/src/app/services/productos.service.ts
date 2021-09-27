import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url = '/api/products';
  constructor(private http: HttpClient) { }
  getProductos(){
    return this.http.get(this.url);

  }
  getProducto(id:string){
    return this.http.get(this.url+'/'+id);
  }

  addProducto(producto:any){
    return this.http.post(this.url,producto);

  }
  deleteProducto(id:string){
    return this.http.delete(this.url+'/'+id);
  }
  editProducto(id:string, producto:any){
      return this.http.put(this.url+'/'+id, producto);
  }
  getCategorias(){
    return this.http.get('/api/category');
  }
  addImg(img:any,id_prod:any){
    return this.http.post('/api/upload/uploadimg'+'/'+id_prod,img);
  }
}
export interface Producto{
    id_prod?: string;
    arch_multi?: string;
    nombre_prod?: string;
    id_tienda?:  string;
    id_categ?:   string;
    desc_prod?: string;
    precio_prod_act?: string;
    precio_prod_ant?: string; 
    stock_prod?: string; 
    cant_ventas?: string;
    oferta?: string;
    estado?: string;
}
