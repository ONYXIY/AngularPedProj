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
  lastBitcoinPriceBybit!: number;
  lastBitcoinPriceBlockchain!: number;
  howMuchMorePrice: number = 0;
  
 


  constructor(private http: HttpClient) {
    setInterval(() =>{
    this.http.get<ICurrApiInterface[]>(this.blockchainApi).subscribe((res) =>{
    this.currApiBlockchain = Object.values(res);
    this.lastBitcoinPriceBlockchain = this.currApiBlockchain[27].last;
    console.log('blockchain price: ' + this.lastBitcoinPriceBlockchain);
    this.filteredData = this.currApiBlockchain;
    this.selectCoinBySymbol(this.selectSymbol)
    })
  },5000);
  setInterval(() =>{
    this.http.get<IBybitInterfacePrice[]>(this.bybitApi).subscribe((res) =>{
    this.currApiByBit = Object.values(res);
    this.lastBitcoinPriceBybit = parseInt(this.currApiByBit[2].list[0].lastPrice)
    console.log('Bybit price: ' + this.lastBitcoinPriceBybit);
    
    })
  },5000);
  setInterval(()=>{
    this.howMuchMore(this.lastBitcoinPriceBybit, this.lastBitcoinPriceBlockchain)}, 2000)
  }
  ngOnInit(): void {
  }
  selectCoinBySymbol(symbol: string){
    this.selectSymbol = symbol;
    this.filteredData = this.currApiBlockchain.filter(item => item.symbol === symbol);
  }
  
  howMuchMore(lastBitcoinPriceBybit: number, lastBitcoinPriceBlockchain: number){
    if(lastBitcoinPriceBybit > lastBitcoinPriceBlockchain){
      this.howMuchMorePrice = (lastBitcoinPriceBybit - lastBitcoinPriceBlockchain)
       
    }else if(lastBitcoinPriceBybit < lastBitcoinPriceBlockchain){
      this.howMuchMorePrice = (lastBitcoinPriceBlockchain - lastBitcoinPriceBybit)
      
    }
      return this.howMuchMorePrice
    }
  }

