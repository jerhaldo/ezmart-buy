import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado, EmpleadosService } from 'app/services/empleados.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  ListaEmpleados: Empleado[];
  constructor(private empleadoService: EmpleadosService, private router: Router ) { }

  ngOnInit(): void {
    this.listarEmpleados(2)   //ID DE LA TIENDA
  }

  listarEmpleados(id:number){

    this.empleadoService.getEmpleados(id).subscribe(
      res=>{
        this.ListaEmpleados=<any>res;
      },
      err=> console.log(err)

    );
  }

  despedirEmpleado(rut_empleado:string){
    this.empleadoService.deleteEmpleado(rut_empleado).subscribe(
      res=>{
          console.log("Se despidió al empleado con exito")
          this.listarEmpleados(2);    //ID DE LA TIENDA
      },err=>{
        console.log(err)
      });
    }
  }
