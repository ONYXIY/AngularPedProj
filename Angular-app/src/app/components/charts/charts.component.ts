import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

  @Input()lastBitcoinPriceBlockchain!: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['lastBitcoinPriceBlockchain'] && !changes['lastBitcoinPriceBlockchain'].firstChange) {
      this.PriceChart(this.lastBitcoinPriceBlockchain);
      console.log('I CHANGE CHARTS ' + this.lastBitcoinPriceBlockchain)
    }
  }

  lineChartData: ChartDataset[] = [
    { 
      data: [], 
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

  
  PriceChart(lastBitcoinPriceBlockchain: number) {
    const newPrice = [...this.lineChartData[0].data, lastBitcoinPriceBlockchain];
    this.lineChartData = [{ ...this.lineChartData[0], data: newPrice }];

  }
  
  
}
