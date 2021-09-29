import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';
import { PedidosService, Pedidos} from '../../services/pedidos.service'
import { EditEstadoComponent } from '../edit-estado/edit-estado.component';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  MostrarPedidos: Pedidos[];

  constructor(private PedidosService: PedidosService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.mostrarPedidos();
    this.setPedidosList();
  }

  mostrarPedidos() {
    this.PedidosService.getPedidos().subscribe(
      res=>{
        console.log(res),
        this.MostrarPedidos = <any>res;
      },
      err => console.log(err)
    );
  }

  showInfo(id:string){
    this.router.navigate(['pedidos/'+id]);
  }

  editEstado(pedidos: Pedidos){
    const ref = this.modalService.open(EditEstadoComponent, {centered: true});
    ref.componentInstance.selectedPedido = pedidos;
    ref.result.then((yes) => {
      console.log("Ok edit");
      this.setPedidosList;
    },
    (cancel) => {
      console.log("Cancel edit");
      
    })
  }

  private setPedidosList() {
    this.PedidosService.getPedidos().subscribe(x => {
      this.MostrarPedidos = <any>x;
    })
  }

}
