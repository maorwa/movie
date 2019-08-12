import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { ManagmentComponent } from './components/managment/managment.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MapModelComponent } from './components/map-model/map-model.component';
import { AgmCoreModule } from '@agm/core';
import { SearchComponent } from './components/search/search.component';
import { PostsComponent } from './components/posts/posts.component';

import { MatExpansionModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MovieNamePipe } from './components/search/pipes/movie-name.pipe';
import { MovieGenrePipe } from './components/search/pipes/movie-genre.pipe';
import { MovieProductionYearPipe } from './components/search/pipes/movie-production-year.pipe';
import { MovieProductionCountryPipe } from './components/search/pipes/movie-production-country.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MovieComponent,
    ManagmentComponent,
    StatisticsComponent,
    WeatherComponent,
    MapModelComponent,
    SearchComponent,
    PostsComponent,
    MovieNamePipe,
    MovieGenrePipe,
    MovieProductionYearPipe,
    MovieProductionCountryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSortModule,
    MatCardModule, 
    MatSelectModule, 
    MatTooltipModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6Oo3L2h-hkBHymAhprLoXQX9tnDwbsNs'
    })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
