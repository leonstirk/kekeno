import {enableProdMode} from '@angular/core';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { Ng2PaginationModule } from 'ng2-pagination';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { PARTIES_DECLARATIONS } from './parties';
import { NAVBAR_DECLARATIONS } from './navbar';
import { HOME_DECLARATIONS } from './home';
import { ABOUT_DECLARATIONS } from './about';
import { CONTACT_DECLARATIONS } from './contact';
import { FOOTER_DECLARATIONS } from './footer';
import { SHARED_DECLARATIONS } from './shared';

// enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccountsModule,
    Ng2PaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWoBdZHCNh5R-hB5S5ZZ2oeoYyfdDgniA'
    })
  ],
  declarations: [
    AppComponent,
    ...PARTIES_DECLARATIONS,
    ...NAVBAR_DECLARATIONS,
    ...HOME_DECLARATIONS,
    ...ABOUT_DECLARATIONS,
    ...CONTACT_DECLARATIONS,
    ...FOOTER_DECLARATIONS,
    ...SHARED_DECLARATIONS
  ],
  providers: [
    ...ROUTES_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}