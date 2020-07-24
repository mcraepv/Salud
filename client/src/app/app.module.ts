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
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { SignOutComponent } from './sign-out/sign-out.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { AdvancedSearchNavComponent } from './advanced-search-nav/advanced-search-nav.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeImgComponent } from './recipe-img/recipe-img.component';
import { RecipeTitleComponent } from './recipe-title/recipe-title.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { RecipeIngredientsComponent } from './recipe-ingredients/recipe-ingredients.component';
import { RecipeExtraComponent } from './recipe-extra/recipe-extra.component';
import { RecipeStepsComponent } from './recipe-steps/recipe-steps.component';

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
    RegisterModalComponent,
    SignOutComponent,
    HomepageComponent,
    AdvancedSearchComponent,
    AdvancedSearchNavComponent,
    RecipeComponent,
    RecipeImgComponent,
    RecipeTitleComponent,
    RecipeInfoComponent,
    RecipeIngredientsComponent,
    RecipeExtraComponent,
    RecipeStepsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
