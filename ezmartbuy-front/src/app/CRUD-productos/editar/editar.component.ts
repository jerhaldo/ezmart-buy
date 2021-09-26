import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductosService,Producto} from '../../services/productos.service'
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  producto: Producto={
    id_prod: '',
    arch_multi: '',
    nombre_prod: '',
    id_tienda:  '',
    id_categ:   '',
    desc_prod: '',
    precio_prod_act: '',
    precio_prod_ant: '', 
    stock_prod: '', 
    cant_ventas: '',
    oferta: '',
    estado: ''
  };
  constructor(private productoService: ProductosService, private activateRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activateRoute.snapshot.params.id;
    if(id_entrada){
      this.productoService.getProducto(id_entrada).subscribe(
        res=>{
          this.producto = res[0];
          console.log(this.producto);
        },err=>{
          console.log(err)
        }
      );
    }
  }
  modificar(){
    this.productoService.editProducto(this.producto.id_prod,this.producto).subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      }
    );
    this.router.navigate(['/productos/']);
  }
}
