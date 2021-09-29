import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  url = '/api/employees/';
  constructor(private http: HttpClient) { }
  
  getEmpleados(tienda_id:number){
    return this.http.get(this.url + tienda_id);
  }

  addEmpleado(contrato:any){
    return this.http.post(this.url+'add',contrato);
  }

  deleteEmpleado(rut_empleado:string){
    return this.http.delete(this.url+'delete/' + rut_empleado);
  }

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

export interface ContratoEmpleado{
  id_tienda?: string;
  rut_usuario?: string;
  fecha_ingreso?: string;
}