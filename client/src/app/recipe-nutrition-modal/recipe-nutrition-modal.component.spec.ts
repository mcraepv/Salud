import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNutritionModalComponent } from './recipe-nutrition-modal.component';

describe('RecipeNutritionModalComponent', () => {
  let component: RecipeNutritionModalComponent;
  let fixture: ComponentFixture<RecipeNutritionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeNutritionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeNutritionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
