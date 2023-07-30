import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISubscription } from 'src/app/interface/interfaceForSubscription';
import { SubscriptionService } from 'src/app/services/subscription.service';



@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit{
  public Subscriptions!: ISubscription[];
  public SubscriptionOnSubs!: Subscription;
  public needMoreDetails: boolean = false;

constructor(private SubscriptionService: SubscriptionService, private router: Router, private route: ActivatedRoute){}

ngOnInit(): void{
this.SubscriptionOnSubs = this.SubscriptionService.getSubscriptions().subscribe((data) => {
  this.Subscriptions = data;
  console.log( this.Subscriptions);
  

})
}
ngOnDestroy(): void {
  if (this.SubscriptionOnSubs) this.SubscriptionOnSubs.unsubscribe();
}

ShowHideDetails(id: number){
  this.needMoreDetails = !this.needMoreDetails
  this.router.navigate(['/subscription', id]);
}


}
