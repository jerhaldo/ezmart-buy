import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  url = '/api/pedidos';
  constructor(private http: HttpClient) { 

  }

  //pedidos
  getPedidos(){
    return  this.http.get(this.url);
  }

  //info de un pedido
  getPedido(id:number){
    return this.http.get(this.url+'/'+id);
  }

  updatePedido(pedidos: { id: string; }) {
    return this.http.put(this.url+'/'+pedidos.id, pedidos, this.httpOptions)
  }

//updatePedido(id:number){
//  return this.http.put(this.url+'/edit/'+id, this.httpOptions)
//}

}

export interface Pedidos{
  estado?: number,  ​​
  fecha_compra?: Date,
  ​​nombre_courier?: string,  ​​
  id_orden?: number,  ​​
  id_tienda?: number,  ​​
  rut_usuario?: number,
  total?: number
}

export interface InfoPedido{
  id?: number,
  nombre_prod?: string,
  desc_prod?: string,
  precio_prod_act?: number,
  precio_prod_ant?: number,
  stock_prod?: number,
  cant_ventas?: number,
  oferta?: number,
  estado?: number
  arch_multi?: string,
  desc_mult?: string,
  nombre_categ?: string
}