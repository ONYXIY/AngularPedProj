import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurPriceApiService {

  constructor(private httpClient: HttpClient) { }
  public get(url: string): Observable<any>{
    return this.httpClient.get(url);
}
// this.CurPriceApiService.get('http://anyurl.com').subscibe(value =>{
//     // value - результат
// },
// error => {
//     // error - объект ошибки
// });
}
