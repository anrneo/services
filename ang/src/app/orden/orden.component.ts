import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

declare var M
@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  constructor(
    private apiService: ApiService

  ) { }
  model:any = {}
  preloader = false
  submitLogin = true
 users:any = []
 arti: any  ={}
 articulos: any = []
 tableArt =  false
 btn_articulo = true

  ngOnInit() {
    this.allUser()
  }

  addOrden(){
    let arti = []
  
    for (const ite of this.articulos) {
      var dat={articulo:ite.articulo, tipo:ite.tipo, sku:ite.sku}
      arti.push(dat)
    }

    let orden = {
      model: this.model,
      arti: arti
    }
    
    this.preloader = true
    this.submitLogin = false
    this.apiService.addOrden(orden)
    .subscribe(dat=>{
      this.preloader = false
      this.submitLogin = true
      this.articulos = []
      this.tableArt =  false
      this.arti = []
      this.model = {}

      M.toast({html: 'Orden creada correctamente', classes: 'rounded teal'})

    })
    
    
  }

  allUser(){
    this.apiService.allUser()
    .subscribe(dat => {
      this.users = dat
    })
  }

  addArticulo(){
    this.articulos.push(this.arti)
    if (this.articulos.length> 0) {
      this.tableArt =  true
    }
    this.arti = []
  


  }

  deleteArt(i){
    this.articulos.splice(i, 1)
    if (this.articulos.length == 0) {  
      this.tableArt =  false    
    }
    this.arti = []
    this.btn_articulo = true

  }

  editArt(i){
    this.arti = this.articulos[i]
    this.arti.id = i
    this.btn_articulo = false

  }

  editArticulo(){
    this.arti = []
    this.btn_articulo = true

  }

}
