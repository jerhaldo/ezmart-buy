import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService, Pedidos} from '../../services/pedidos.service'

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  MostrarPedidos: Pedidos[];

  constructor(private PedidosService: PedidosService, private router: Router) { }

  ngOnInit(): void {
    this.mostrarPedidos();
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

}
