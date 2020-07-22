import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavTogglerComponent } from './sidenav-toggler/sidenav-toggler.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { FrontPageJumbotronComponent } from './front-page-jumbotron/front-page-jumbotron.component';
import { FrontPageSearchBarComponent } from './front-page-search-bar/front-page-search-bar.component';
import { DrinksOfDayComponent } from './drinks-of-day/drinks-of-day.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavTogglerComponent,
    SidenavComponent,
    SignInComponent,
    SignInModalComponent,
    FrontPageJumbotronComponent,
    FrontPageSearchBarComponent,
    DrinksOfDayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
