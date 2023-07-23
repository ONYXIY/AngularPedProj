import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { ChartsComponent } from '../charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {path: '', component: BaseComponent}
 
];


@NgModule({
  declarations: [BaseComponent, ChartsComponent],
  exports: [BaseComponent],
  imports: [
    CommonModule, NgChartsModule, RouterModule.forChild(routes),
  ]
})
export class BaseModule { }
