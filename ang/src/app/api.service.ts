import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,  

  ) { }

  private url_base = 'http://127.0.0.1:8000';  // URL to web api


  addUser(model){     
    const url = `${this.url_base}/api/adduser`;
    return this.http.post(url, model)
  
  }

  userloggedin (model) {        
      const url = `${this.url_base}/api/userlogged`; 
    return this.http.post(url, model)  
    }  

    addOrden (orden) {        
      const url = `${this.url_base}/api/services`; 
    return this.http.post(url, orden)  
    } 

    getOrdenes () {        
      const url = `${this.url_base}/api/services`; 
    return this.http.get(url)  
    } 

    getUser (id) {           
      const url = `${this.url_base}/api/getuser/${id}`; 
    return this.http.get(url)  
    } 
    getClientes () {           
      const url = `${this.url_base}/api/getclientes`; 
    return this.http.get(url)     
    } 
    getReport (cli) {        
      const url = `${this.url_base}/api/getreport/${cli}`; 
    return this.http.get(url)  
    } 

    allUser(){
      const url = `${this.url_base}/api/alluser`; 
      return this.http.get(url)  
    }


    update(model){

      const url = `${this.url_base}/api/services/${model.id}`; 
      return this.http.put(url, model)  
    }
  
}
