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
    console.log(this.img)
    
    this.productoService.addProducto(this.producto).subscribe(
      res=>{
        console.log(res);
        this.agregarimg(res);
      },err=>{
        console.log(err)
      }
    );

    //this.router.navigate(['/productos']);
    
  }
  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

      const formData = new FormData();

        formData.append("img",file);
        this.img= formData;
    }
  }
  agregarimg(id_prod:any){
    
    const formData = new FormData();
    this.productoService.addImg(this.img,id_prod).subscribe(
      res=>{
        console.log(res);
      }
    );
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
