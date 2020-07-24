import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeExtraComponent } from './recipe-extra.component';

describe('RecipeExtraComponent', () => {
  let component: RecipeExtraComponent;
  let fixture: ComponentFixture<RecipeExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
