import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var M

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor( 
    private router:Router,
    private apiService: ApiService   
    ) {}
   
    registrar= true   
  preloader = false
  submitLogin = true
    model:any = {}
  emailCheck = false
  emailConfirm = false
  lengPass = 0
  lengPassCon = 0
  validPass = false
  Confirm_password = false
  ngOnInit() {
  }


  confirmPass(){  
    if (this.countPass()) {
      this.Confirm_password = true
    }else{
      this.Confirm_password = false

    }
    }

    countPass(){
      if (this.model.password) {
        this.lengPass = this.model.password.length;
    
      }
      if (this.model.confirm_password) {
        this.lengPassCon = this.model.confirm_password.length;
    
      }
      if ( this.lengPass > 5 && this.lengPassCon > 5){
        if (this.model.password == this.model.confirm_password) {
                this.validPass = true
                return true
        }else{
          this.validPass = false
          return false
        }
      }else{
        this.validPass = false
        return false
      }
        
      
    
    }

    confirmEmail(email){  
      var regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
         
        if(regExp.test(email)){
          this.emailConfirm = true
        
      }else{
        this.emailConfirm = false
    
      }
    }

    add(): void {  
       
      var regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
       
      if(regExp.test(this.model.email) && this.countPass()){
  
      this.preloader = true
      this.submitLogin = false    
      this.apiService.addUser(this.model)
        .subscribe(id => { 
          localStorage.setItem('id', `${id}`)

         this.router.navigate([`home/${id}`])
         M.toast({html: 'Usuario creado correctamente', classes: 'rounded teal'})
        },
        error => {
          this.preloader = false,
          this.submitLogin = true,
          M.toast({html: 'El email ingresado ya existe', classes: 'rounded teal'})
        }
        );
      }else{
        M.toast({html: 'Los datos ingresados son incorrectos', classes: 'rounded teal'})
  
      }
  
    }

    register(){
      this.registrar = false
    }

    login(){
      this.registrar = true
    }

    loginadd(){
    this.apiService.userloggedin(this.model)
    .subscribe(dat =>{
      if (dat) {
        localStorage.setItem('id', `${dat.id}`)
        this.router.navigate([`home/${dat.id}`])
        M.toast({html: `Bienvenido ${dat.email}`, classes: 'rounded teal'})
      }else{
        M.toast({html: 'Los datos son incorrectos', classes: 'rounded teal'})
      }
     
    },
    error => {
      M.toast({html: 'Los datos son incorrectos', classes: 'rounded teal'})

    
    })

    }
}
