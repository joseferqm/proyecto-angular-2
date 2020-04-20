import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserService} from './shared/user.service';
import {RouteGuard} from './shared/route-guard';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [UserService, RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
