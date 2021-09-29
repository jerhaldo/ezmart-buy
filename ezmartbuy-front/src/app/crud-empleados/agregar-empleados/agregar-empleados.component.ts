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
    this.empleadoService.addEmpleado(this.contrato_empleado).subscribe(
      res=>{
        console.log("Empleado agregado con éxito");
      },err=>{
        console.log(err)
      }
    );
    
    let notify = new NotificationsComponent();
    notify.showNotificationMessage('top', 'left', 'success', 1000, 'Empleado agregado con éxito');
    this.router.navigate(['/empleados']);
  }
  
}
