import { Cocktail } from './../models/cocktail';
import { QueryService } from './../query.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-recipe-nutrition-modal',
  templateUrl: './recipe-nutrition-modal.component.html',
  styleUrls: ['./recipe-nutrition-modal.component.css'],
})
export class RecipeNutritionModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private queryService: QueryService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.getNutrition();
  }

  getNutrition() {
    // const cocktailName: string = this.route.snapshot.paramMap.get(
    //   'cocktailName'
    // );
    // this.queryService.getNutritionFacts(cocktailName).subscribe((data) => {
    //   console.log(data);
    // });
  }
}
