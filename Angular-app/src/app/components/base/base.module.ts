import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { ChartsComponent } from '../charts/charts.component';
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [BaseComponent, ChartsComponent],
  exports: [BaseComponent],
  imports: [
    CommonModule, NgChartsModule
  ]
})
export class BaseModule { }
