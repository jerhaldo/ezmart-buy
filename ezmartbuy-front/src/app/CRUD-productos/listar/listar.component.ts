import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService} from '../../services/productos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  ListarProducto: Producto[];
  constructor(private productoService: ProductosService, private router: Router ) { }

  ngOnInit(): void {
    this.listarProductos()
  }
  listarProductos(){

    this.productoService.getProductos().subscribe(
      res=>{
        console.log(res);
        this.ListarProducto=<any>res;
      },
      err=> console.log(err)

    );
    /* this.productoService.getProductosByTienda(id_tienda).subscribe(
      res=>{
        console.log(res);
        this.ListarProducto=<any>res;
      },
      err=> console.log(err)

    ); */
  }
  eliminarProducto(id:string){
    this.productoService.deleteProducto(id).subscribe(
      res=>{
          console.log("se borro el producto")
          this.listarProductos();
      },err=>{
        console.log(err)
      }
      );


  }
  modificarProducto(id: string){
    this.router.navigate(['/productos/edit/'+id]);
  }
}
