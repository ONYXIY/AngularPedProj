import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISubscription } from '../interface/interfaceForSubscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  url: string = 'http://localhost:3000/subscription';

  constructor(private http: HttpClient) { }

  getSubscriptions(){
    return this.http.get<ISubscription[]>(this.url);
  }
  getSubscription(id: number){
    return this.http.get<ISubscription>(`${this.url}/${id}`);
  }


}
