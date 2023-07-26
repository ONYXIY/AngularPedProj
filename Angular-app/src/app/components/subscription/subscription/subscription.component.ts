import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISubscription } from 'src/app/interface/interfaceForSubscription';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit{
  Subscriptions!: ISubscription[];
  SubscriptionOnSubs!: Subscription;

constructor(private SubscriptionService: SubscriptionService){}

ngOnInit(): void{
this.SubscriptionOnSubs = this.SubscriptionService.getSubscriptions().subscribe((data) => {
  this.Subscriptions = data
  console.log( this.Subscriptions)
})
}
ngOnDestroy(): void {
  if (this.SubscriptionOnSubs) this.SubscriptionOnSubs.unsubscribe();
}


}
