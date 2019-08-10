import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManagmentComponent } from './components/managment/managment.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'management', component: ManagmentComponent, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatisticsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
