import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { ContratoEmpleado, EmpleadosService } from 'app/services/empleados.service';
declare var $: any;
@Component({
  selector: 'app-agregar-empleados',
  templateUrl: './agregar-empleados.component.html',
  styleUrls: ['./agregar-empleados.component.css']
})
export class AgregarEmpleadosComponent implements OnInit {
  
  contrato_empleado: ContratoEmpleado= {
    id_tienda: '',
    rut_usuario: ''
  };

  constructor(private empleadoService: EmpleadosService, private router: Router) { }

  ngOnInit(): void {
  
  }

  contratarEmpleado(){
    this.contrato_empleado.id_tienda = '2';   //ID TIENDA
    let notify = new NotificationsComponent();
    this.empleadoService.addEmpleado(this.contrato_empleado).subscribe(
      res=>{
        console.log(res);
        notify.showNotificationMessage('top', 'left', 'success', 1000, 'Se ha agregado a un empleado.');
        this.router.navigate(['/empleados']);
      },err=>{
        console.log(err)
        notify.showNotificationMessage('top', 'left', 'danger', 1000, 'Error en agregar empleado.');
      }
    );
  }
  
}
