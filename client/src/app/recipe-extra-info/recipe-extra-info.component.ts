import { RecipeNutritionModalComponent } from './../recipe-nutrition-modal/recipe-nutrition-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QueryService } from './../query.service';
import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppToastService } from '../app-toast.service';

@Component({
  selector: 'app-recipe-extra-info',
  templateUrl: './recipe-extra-info.component.html',
  styleUrls: ['./recipe-extra-info.component.css'],
})
export class RecipeExtraInfoComponent implements OnInit {
  @Input() cocktail: Cocktail;
  name: string;

  constructor(
    private queryService: QueryService,
    private modalService: NgbModal,
    private toastService: AppToastService
  ) {}

  isFavorite = false;

  checkFavs() {
    const user: String = localStorage.getItem('email');
    const favs$: Observable<any> = this.queryService.getFavorites(user);

    favs$.subscribe((drinks) => {
      console.log(drinks);
      drinks.forEach((drink) => {
        if (this.name === drink.name) {
          this.isFavorite = true;
          return;
        }
      });
      console.log(this.isFavorite);
    });
  }

  ngOnChanges(): void {
    this.getName();
  }

  getName() {
    if (this.cocktail) {
      this.name = this.cocktail.name;
    }
  }

  addFavorite() {
    const userID = parseInt(localStorage.getItem('userID'));
    this.queryService.addFavorite(this.cocktail.id, userID);
    this.isFavorite = true;
    this.toastService.show('Added to Favorites!');
  }

  removeFavorite() {
    const userID = parseInt(localStorage.getItem('userID'));
    this.queryService.removeFavorite(this.cocktail.id, userID);
    this.isFavorite = false;
    this.toastService.show('Removed from Favorites!');
  }

  open(): void {
    const modalRef = this.modalService.open(RecipeNutritionModalComponent);
    modalRef.componentInstance.name = this.name;
  }

  ngOnInit(): void {
    this.checkFavs();
  }
}
