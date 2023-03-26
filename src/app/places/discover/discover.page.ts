import { Component, OnInit } from '@angular/core';
import { Place } from '../../_models/places/place.model';
import { PlacesService } from '../../_services/places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[] = [];
  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }
}
