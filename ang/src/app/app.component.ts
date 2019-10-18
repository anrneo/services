import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var M

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']   
})
export class AppComponent {        
  
  login = true
  userId
  constructor( 
    private router:Router,
    private apiService: ApiService

    ) {}

  ngOnInit()      
  {
        
    this.materialize() 
    this.isLogin()
  }

  materialize(){   
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, Option);
    });
  }

  isLogin(){
    if (localStorage.getItem('id')) {  
     this.userId  = localStorage.getItem('id')
      return true
    }else{
      return false
    }
  }

  logout(){
    localStorage.removeItem('id')
    this.isLogin()
    this.router.navigate([`login`])

  }



}
