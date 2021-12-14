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
  id_tienda: string;

  constructor(private PedidosService: PedidosService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.id_tienda = '2'
    this.mostrarPedidos(this.id_tienda);
    this.setPedidosList(this.id_tienda);
  }

  mostrarPedidos(id_tienda:string) {
    this.PedidosService.getPedidos(id_tienda).subscribe(
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

  private setPedidosList(id_tienda: string) {
    this.PedidosService.getPedidos(id_tienda).subscribe(x => {
      this.MostrarPedidos = <any>x;
    })
  }

}
