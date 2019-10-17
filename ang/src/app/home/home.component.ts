import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
declare var M
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  model:any = {}
  preloader = false
  submitLogin = true
  data:any = []
  user:any={}


  ngOnInit() {
    this.getOrdenes()
    this.getUser()
  }

getOrdenes(){
  this.apiService.getOrdenes()
  .subscribe(dat=>{
    for (const ite of dat) {
      if (ite.user_id == localStorage.getItem('id')) {
        this.data.push(ite)
      }
    }
  })
}

getUser(){
  this.apiService.getUser(localStorage.getItem('id'))
  .subscribe(dat=>{
    this.user=dat
  })
}

editArt(id){
  for (const ite of this.data) {
    if (ite.id == id) {
      this.model = ite
    }
    
  }

  
}

addOrden(model){
  this.preloader = true     
  this.submitLogin = false
  this.apiService.update(model)
  .subscribe(dat=>{
    this.model = {}
    M.toast({html: 'Orden actualizada correctamente', classes: 'rounded teal'})
    this.preloader = false
  this.submitLogin = true
  })
}

}
