import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url = '/api/pedidos';
  constructor(private http: HttpClient) { }

  //pedidos
  getPedidos(){
    return  this.http.get(this.url);
  }

  //info de un pedido
  getPedido(id:number){
    return this.http.get(this.url+'/'+id);
  }
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