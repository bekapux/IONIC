import { Injectable } from '@angular/core';
import { Place } from '../_models/places/place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In new york city',
      'https://images.unsplash.com/photo-1657763889378-f23814ae3464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      149.99
    ),
    new Place(
      'p2',
      'Germany',
      'Palace in Germany',
      'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      189.99
    ),
    new Place(
      'p3',
      'Australia',
      'Not Average vacation',
      'https://images.unsplash.com/photo-1526546334624-2afe5b01088d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8VG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
      159.99
    ),
  ];

  get places(): any {
    return [...this._places];
  }

  getPlace(id: string): Place{
    return {...this._places.find(x=> x.id == id)!};
  }

  constructor() {}
}
