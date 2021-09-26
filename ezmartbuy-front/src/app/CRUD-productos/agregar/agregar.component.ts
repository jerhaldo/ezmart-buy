import { Component, OnInit } from '@angular/core';
import { ProductosService,Producto } from 'app/services/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  producto: Producto={
    id_prod: '',
    arch_multi: '',
    nombre_prod: '',
    id_tienda:  '1',
    id_categ:   '',
    desc_prod: '',
    precio_prod_act: '',
    precio_prod_ant: '0', 
    stock_prod: '', 
    cant_ventas: '0',
    oferta: '0',
    estado: '1'
  };
  img: any;
  ListarCategoria: any;
  constructor(private productoService: ProductosService, private router: Router) { }

  ngOnInit(): void {
    this.getCategorias();
  }
  agregarProducto(){
    //console.log(this.img)

    
    //this.productoService.addProducto(this.producto).subscribe();
    this.productoService.addImg(this.img).subscribe(
      res=>{
        console.log(res);
      }
    );
    //this.router.navigate(['/productos']);
    
  }
  getCategorias(){

    this.productoService.getCategorias().subscribe(
      res=>{
        console.log(res);
        this.ListarCategoria=<any>res;
      },
      err=> console.log(err)

    );
  }
}
