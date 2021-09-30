import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsComponent } from 'app/notifications/notifications.component';
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
    let notify = new NotificationsComponent();
    this.empleadoService.deleteEmpleado(rut_empleado).subscribe(    
      res=>{
          console.log(res);
          notify.showNotificationMessage('top', 'left', 'warning', 1000, 'Se ha despedido a un empleado.');
          this.listarEmpleados(2);    //ID DE LA TIENDA
      },
      err=> {
        console.log(err);
        notify.showNotificationMessage('top', 'left', 'danger', 1000, 'Error en despedir al empleado.');
      }
    );
  }
}
