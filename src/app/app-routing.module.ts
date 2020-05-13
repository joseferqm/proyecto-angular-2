import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RouteGuard} from './shared/route-guard';
import {AuthorComponent} from './author/author.component';
import {LocationComponent} from './location/location.component';
import {GoogleMapDemoComponent} from './google-map-demo/google-map-demo.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [RouteGuard]},
  {path: 'home', component: HomeComponent, canActivate: [RouteGuard]},
  {path: 'author/:authorName', component: AuthorComponent, canActivate: [RouteGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'location', component: LocationComponent, canActivate: [RouteGuard]},
  {path: 'mapdemo', component: GoogleMapDemoComponent, canActivate: [RouteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
