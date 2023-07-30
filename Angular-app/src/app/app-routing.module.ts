import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { LoginComponent } from './components/login/login/login.component';
import { SubscriptionComponent } from './components/subscription/subscription/subscription.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./components/base/base.module').then(m =>m.BaseModule)},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'subscription', component: SubscriptionComponent},
  {path: 'subscription/:id', component: SubscriptionComponent},
  {path: '**', redirectTo: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
