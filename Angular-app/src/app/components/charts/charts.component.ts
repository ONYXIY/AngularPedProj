import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {


  lineChartData: ChartDataset[] = [
    { 
      data: [85, 72, 78, 75, 77, 75], 
      label: 'BTC/USD',
      backgroundColor: 'rgb(29, 45, 80);', 
      borderColor: 'yellow'
    },
  ];

  lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions: ChartOptions = {
    responsive: true,
  };

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';


}
