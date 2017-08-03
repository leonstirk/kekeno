import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
//  { path: 'parties', component: PartiesListComponent },
//  { path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: '**', redirectTo: '' }
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];
