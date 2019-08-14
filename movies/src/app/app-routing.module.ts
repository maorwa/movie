import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LoggedInGuard } from 'src/app/guards/loggedIn.guard';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';
import { PostsComponent } from './components/posts/posts.component';
import { AccountComponent } from './components/account/account.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate: [LoggedInGuard] },
  { path: "PageNotFound", component: PageNotFoundComponent },
  { path: 'account', component: AccountComponent , canActivate: [AuthGuard]},
  { path: 'statistics', component: StatisticsComponent },
  { path: 'search', component: SearchComponent , canActivate: [AuthGuard]},
  { path: 'posts', component: PostsComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/PageNotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
