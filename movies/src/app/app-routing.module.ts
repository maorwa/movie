import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
>>>>>>> b8925708b7e13077e576d019ada6085320682ba6
import { LoginComponent } from './login/login.component';


const routes: Routes = [
<<<<<<< HEAD
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  
=======
  { path: 'login', component: LoginComponent },
>>>>>>> b8925708b7e13077e576d019ada6085320682ba6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
