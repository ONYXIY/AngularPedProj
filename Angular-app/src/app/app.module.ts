import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { BaseModule } from './components/base/base.module';
import { LoginComponent } from './components/login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    FooterComponent,
    
    ProfileComponent,
         LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, BaseModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
