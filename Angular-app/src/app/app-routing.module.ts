import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile/profile.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./components/base/base.module').then(m =>m.BaseModule)},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
