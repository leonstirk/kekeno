import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';

export const routes: Route[] = [
  { path: '', component: PartiesListComponent, pathMatch:'full' },
  { path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
    { path: '**', redirectTo: '' }
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];
