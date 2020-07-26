import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientsInfoComponent } from './recipe-ingredients-info.component';

describe('RecipeIngredientsInfoComponent', () => {
  let component: RecipeIngredientsInfoComponent;
  let fixture: ComponentFixture<RecipeIngredientsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIngredientsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngredientsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
