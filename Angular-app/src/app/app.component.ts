import { ICurrApiInterface } from './interface/interfaceForBtcApi';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBybitInterfacePrice } from './interface/interfaceForBybitApi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Angular-app';
  currApiBlockchain: ICurrApiInterface[] = [];
  selectSymbol: string = 'USD';
  filteredData: ICurrApiInterface[] = [];
  blockchainApi: string = 'https://blockchain.info/ticker';
  bybitApi: string = 'https://api-testnet.bybit.com/v5/market/tickers?category=inverse&symbol=BTCUSD';
  currApiByBit: IBybitInterfacePrice[] = [];
  
 


  constructor(private http: HttpClient) {
    setInterval(() =>{
    this.http.get<ICurrApiInterface[]>(this.blockchainApi).subscribe((res) =>{
    this.currApiBlockchain = Object.values(res);
    console.log(this.currApiBlockchain);
    this.filteredData = this.currApiBlockchain;
    this.selectCoinBySymbol(this.selectSymbol)
    })
  },2000);
  setInterval(() =>{
    this.http.get<IBybitInterfacePrice[]>(this.bybitApi).subscribe((res) =>{
    this.currApiByBit = Object.values(res);
    const lastBybitPric = this.currApiByBit[2].list[0].lastPrice;
    console.log(lastBybitPric);
    
    })
  },2000);
  }
  ngOnInit(): void {
  }
  selectCoinBySymbol(symbol: string){
    this.selectSymbol = symbol;
    this.filteredData = this.currApiBlockchain.filter(item => item.symbol === symbol);
  }
}
