import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pedidos, PedidosService } from 'app/services/pedidos.service';

@Component({
  selector: 'app-edit-estado',
  templateUrl: './edit-estado.component.html',
  styleUrls: ['./edit-estado.component.css']
})
export class EditEstadoComponent implements OnInit {

  selectedPedido : Pedidos;
  editForm : FormGroup;
  isLoading = false;
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private pedidosService: PedidosService, private formBuilder: FormBuilder, private router: Router){ }

  ngOnInit(){
    this.setForm()
  }

  onSubmit(){
    if(this.editForm.invalid || this.isLoading){
      return;
    }
    this.isLoading = true;
    this.pedidosService.updatePedido(this.editForm.value).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
      
    },
    error => {
      this.isLoading = false;
    });
  }

  get editFormData() { return this.editForm.controls; }

  private setForm() {
    console.log(this.selectedPedido);
      this.editForm = this.formBuilder.group({
        id:[this.selectedPedido.id_orden],
        fecha_compra:[this.selectedPedido.fecha_compra],
        nombre_courier: [this.selectedPedido.nombre_courier],
        rut_usuario: [this.selectedPedido.rut_usuario],
        estado: [this.selectedPedido.estado]
      });
  }
}
