import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
declare var M
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor(
    private apiService: ApiService

  ) { }
  model:any = {}
json = ''
  preloader = false
  submitLogin = true
  clientes:any=[]
  ngOnInit() {
    this.getClientes()
  }

  getClientes(){
    this.apiService.getClientes()
    .subscribe(dat=>{
      this.clientes = dat
    })
  }

  addOrden(){      
    this.apiService.getReport(this.model.cliente)
    .subscribe(dat=>{   
      this.json = JSON.stringify(dat)   
      M.toast({html: 'Reporte creado correctamente', classes: 'rounded teal'})
      window.open(`${this.apiService.url_base}/api/getreport/${this.model.cliente}`, '_blank')
    })
  }

  changeSelec(){   
    this.json = ''
  }
}
