import { ReporteComponent } from './reporte/reporte.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenComponent } from './orden/orden.component';


const routes: Routes = [
  {  path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'home/:id', component: HomeComponent },
   { path: 'orden', component: OrdenComponent },
   { path: 'report', component: ReporteComponent },
   { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }