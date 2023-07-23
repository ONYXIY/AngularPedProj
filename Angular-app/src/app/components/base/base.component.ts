import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subscription, interval, map, switchMap } from 'rxjs';
import { ICurrApiInterface } from 'src/app/interface/interfaceForBtcApi';
import { IBybitInterfacePrice } from 'src/app/interface/interfaceForBybitApi';
import { IBTCFee } from 'src/app/interface/interfaceForTransferFee';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  currApiBlockchain: ICurrApiInterface[] = [];
  blockchainApi: string = 'https://blockchain.info/ticker';
  bybitApi: string = 'https://api-testnet.bybit.com/v5/market/tickers?category=inverse&symbol=BTCUSD';
  currApiByBit: IBybitInterfacePrice[] = [];
  BTCFeeApi: string = 'https://api.blockchain.info/mempool/fees';
  BTCFeePriority: IBTCFee[] = [];
  BTCFeePriorityPrice!: IBTCFee | number;
  lastBitcoinPriceBybit!: number;
  lastBitcoinPriceBlockchain!: number;
  howMuchMorePrice: number = 0;
  PriorityBTCFee!: number;
  private bybitApi$!: Observable<IBybitInterfacePrice[]>;
  private bchApi$!: Observable<ICurrApiInterface[]>;
  private BtcFee$!: Observable<IBTCFee>;


  constructor(private http: HttpClient) {
  
  setInterval(()=>{
    this.howMuchMore(this.lastBitcoinPriceBybit, this.lastBitcoinPriceBlockchain, Number(this.BTCFeePriorityPrice))}, 5000)
  }
  
  ngOnInit(): void {
    this.bchApi$ = interval(5000).pipe(
      switchMap(() => this.http.get<ICurrApiInterface[]>(this.blockchainApi))
    );
  
    this.bchApi$.subscribe((res: ICurrApiInterface[]) => {
      this.currApiBlockchain = Object.values(res);
      this.lastBitcoinPriceBlockchain = this.currApiBlockchain[27].last;
      console.log('Blockchain price: ' + this.lastBitcoinPriceBlockchain);
    });

    this.bybitApi$ = interval(5000).pipe(
      switchMap(() => this.http.get<IBybitInterfacePrice[]> (this.bybitApi))
    );
    this.bybitApi$.subscribe((res: IBybitInterfacePrice[]) =>{
      this.currApiByBit = Object.values(res);
      this.lastBitcoinPriceBybit = Number(this.currApiByBit[2].list[0].lastPrice)
      console.log('Bybit price: ' + this.lastBitcoinPriceBybit)
    });
    this.BtcFee$ = interval(5000).pipe(
      switchMap(() => this.http.get<IBTCFee>(this.BTCFeeApi))
    );
    this.BtcFee$.subscribe((res: IBTCFee) =>{
      this.BTCFeePriority = Object.values(res);
      this.BTCFeePriorityPrice = this.BTCFeePriority[2]
      console.log('BTC fee rn ' + this.BTCFeePriorityPrice)
    })
  
  }
  
  howMuchMore(lastBitcoinPriceBybit: number, lastBitcoinPriceBlockchain: number, BTCFeePriorityPrice: number){
    if(lastBitcoinPriceBybit > lastBitcoinPriceBlockchain){
      this.howMuchMorePrice = ((lastBitcoinPriceBybit - lastBitcoinPriceBlockchain) - BTCFeePriorityPrice)
       
    }else if(lastBitcoinPriceBybit < lastBitcoinPriceBlockchain){
      this.howMuchMorePrice = ((lastBitcoinPriceBlockchain - lastBitcoinPriceBybit) - BTCFeePriorityPrice)
      
    }
      return this.howMuchMorePrice
    }
    AddBtcPrice(){
      this.lastBitcoinPriceBlockchain = this.lastBitcoinPriceBlockchain + 1000 
      console.log(this.lastBitcoinPriceBlockchain)
      return this.lastBitcoinPriceBlockchain

    }
}
