import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from 'src/app/_models/places/place.model';
import { PlacesService } from 'src/app/_services/places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnDestroy {
  placeId: string | undefined;
  place: Place | undefined;
  routeSub: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController
  ) {
  }
  
  ngOnInit(){
    this.routeSub = this.route.paramMap.subscribe((map) => {
      if (!map.has('placeId')) {
        this.navCtrl.navigateBack('places/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlace(map.get('placeId')!);     
    });  
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }
}
