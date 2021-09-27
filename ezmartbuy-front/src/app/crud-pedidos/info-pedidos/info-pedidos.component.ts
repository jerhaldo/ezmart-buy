import { Component, OnInit } from '@angular/core';
import { PedidosService, InfoPedido } from '../../services/pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-pedidos',
  templateUrl: './info-pedidos.component.html',
  styleUrls: ['./info-pedidos.component.css']
})
export class InfoPedidosComponent implements OnInit {

  infoPedido: InfoPedido[];
  orden_id: number;

  constructor(private PedidoService: PedidosService, private router: Router,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = <number>this.activeRoute.snapshot.params.id;
    console.log('id de entrada: '+id);
    if(id){
      this.PedidoService.getPedido(id).subscribe(
        res=>{
          console.log(res[0]);
          this.infoPedido = <any>res;
          this.orden_id = id;
        },
        err=>console.log(err)
      );
    }
  }

}
