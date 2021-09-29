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
  constructor(private productoService: EmpleadosService, private router: Router ) { }

  ngOnInit(): void {
    this.listarProductos(2)
  }

  listarProductos(id:number){

    this.productoService.getEmpleados(id).subscribe(
      res=>{
        this.ListaEmpleados=<any>res;
      },
      err=> console.log(err)

    );
  }

  /* despedirEmpleado(id:string){
    this.productoService.deleteEmpleado(id).subscribe(
      res=>{
          console.log("se borro el producto")
          this.listarProductos();
      },err=>{
        console.log(err)
      }
      );


  } */
  /* modificarProducto(id: string){
    this.router.navigate(['/productos/edit/'+id]);
  } */
}
