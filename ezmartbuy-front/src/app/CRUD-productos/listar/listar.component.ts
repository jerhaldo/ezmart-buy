import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService} from '../../services/productos.service';
import { Router } from '@angular/router';
import { NotificationsComponent } from 'app/notifications/notifications.component';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  ListarProducto: Producto[];
  id_tienda: string;
  constructor(private productoService: ProductosService, private router: Router ) { }

  ngOnInit(): void {
    this.id_tienda = '1';
    this.listarProductos()
    
  }
  listarProductos(){

    /* this.productoService.getProductos().subscribe(
      res=>{
        console.log(res);
        this.ListarProducto=<any>res;
      },
      err=> console.log(err)

    ); */
     this.productoService.getProductosByTienda(this.id_tienda).subscribe(
      res=>{
        console.log(res);
        this.ListarProducto=<any>res;
      },
      err=> console.log(err)

    );
  }
  eliminarProducto(id:string){
    let notify = new NotificationsComponent();
    this.productoService.deleteProducto(id).subscribe(
      res=>{
          console.log("se borro el producto");
          notify.showNotificationMessage('top', 'left', 'warning', 1000, 'Se ha eliminado un producto.');
          this.listarProductos();
      },err=>{
        console.log(err);
        notify.showNotificationMessage('top', 'left', 'danger', 1000, 'Error en eliminar el producto.');
      }
    );


  }
  modificarProducto(id: string){
    this.router.navigate(['/productos/edit/'+id]);
  }
}
