import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '', redirectTo: '/places/tabs/discover', pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () =>import('./discover/discover.module').then((x) => x.DiscoverPageModule),
          },
          {
            path: ':placeId',
            loadChildren: () =>import('./discover/place-detail/place-detail.module').then((m) => m.PlaceDetailPageModule),
          },
        ],
      },
      {
        path: 'offers',
        children: [
          {
            path: '', loadChildren: ()=> import('./offers/offers.module').then(x=> x.OffersPageModule)
          },
          {
            path: 'new', loadChildren: () => import('./offers/new-offer/new-offer.module').then(x=> x.NewOfferPageModule)
          },
          {
            path: 'edit/:placeId', loadChildren: () => import('./offers/edit-offer/edit-offer.module').then(x=> x.EditOfferPageModule)
          },
          {
            path: ':placeId', loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then(x=> x.OfferBookingsPageModule)
          }
        ]
      },
      {
        path: '', redirectTo: '/places/tavs/discover', pathMatch: 'full'
      }
    ],
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
