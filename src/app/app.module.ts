import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserService} from './shared/user.service';
import {RouteGuard} from './shared/route-guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToastrModule} from 'ngx-toastr';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NotificationService} from './shared/notification.service';
import {HeaderComponent} from './header/header.component';
import {PostService} from './shared/post.service';
import {SpinnerService} from './shared/spinner.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule
  ],
  providers: [UserService, RouteGuard, NotificationService, PostService, SpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
