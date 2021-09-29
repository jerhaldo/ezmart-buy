import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  url = '/api/employees';
  constructor(private http: HttpClient) { }
  
  getEmpleados(id:number){
    return this.http.get(this.url+'/'+id);

  }
  /* getProducto(id:string){
    return this.http.get(this.url+'/'+id);
  } */

  addEmpleado(empleado:any){
    return this.http.post(this.url,empleado);
  }

  /* deleteProducto(id:string){
    return this.http.delete(this.url+'/'+id);
  } */

}
export interface Empleado{
    rut_usuario?: string;
    nombre_usuario?: string;
    apellido_pat?: string;
    apellido_mat?: string;
    fecha_ingreso?: string;
    telefono?: string;
    email?: string;
}
