import { AboutComponent } from './about/about.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { UserFavoritesComponent } from './user-favorites/user-favorites.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'advanced-search', component: AdvancedSearchComponent },
  { path: 'recipe/:cocktailName', component: RecipeComponent },
  { path: '**', component: HomepageComponent },
  { path: 'favorites', component: UserFavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
