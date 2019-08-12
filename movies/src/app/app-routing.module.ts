import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManagmentComponent } from './components/managment/managment.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'management', component: ManagmentComponent, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'posts', component: PostsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
