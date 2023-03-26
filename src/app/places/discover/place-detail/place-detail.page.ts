import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from 'src/app/_models/places/place.model';
import { PlacesService } from 'src/app/_services/places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place: Place | undefined;
  routeSub: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((map) => {
      if (!map.has('placeId')) {
        this.navCtrl.navigateBack('places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(map.get('placeId')!);
    });
  }

  onBookPlace() {
    // this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place },
        id: 'booking-confirm-modal',
      })
      .then((x) => {
        x.present();
        return x.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);
        if(resultData.role === 'confirm'){
          console.log("Booked!");
        }
      });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
