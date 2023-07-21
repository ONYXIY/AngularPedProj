import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

  lineChartData: ChartDataset[] = [
    { 
      data: [85, 72, 78, 75, 77, 75], 
      label: 'Crude oil prices',
      backgroundColor: 'rgba(255, 255, 0, 0.28)', // Используем backgroundColor напрямую
      borderColor: 'black' // Используем borderColor напрямую
    },
  ];

  lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions: ChartOptions = {
    responsive: true,
  };

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}
