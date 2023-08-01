import { NgModule, isDevMode } from '@angular/core';
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
import { SubscriptionComponent } from './components/subscription/subscription/subscription.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    FooterComponent,
    
    ProfileComponent,
         LoginComponent,
         SubscriptionComponent,
         RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
    BaseModule, 
    StoreModule.forRoot({}, {}), 
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), 
    BrowserAnimationsModule

  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
