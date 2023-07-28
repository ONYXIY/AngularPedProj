import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IBybitInterfacePrice} from '../interface/interfaceForBybitApi'

@Injectable({
  providedIn: 'root'
})
export class CurPriceApiService {
  constructor(private http: HttpClient) { }
 getPrice(): Observable<IBybitInterfacePrice[]>{
  return this.http.get<IBybitInterfacePrice[]>('https://api-testnet.bybit.com/v5/market/tickers?category=inverse&symbol=BTCUSD',{
  })
 }
}

