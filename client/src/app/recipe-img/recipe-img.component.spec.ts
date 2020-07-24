import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeImgComponent } from './recipe-img.component';

describe('RecipeImgComponent', () => {
  let component: RecipeImgComponent;
  let fixture: ComponentFixture<RecipeImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
