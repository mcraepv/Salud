import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeTitleComponent } from './recipe-title.component';

describe('RecipeTitleComponent', () => {
  let component: RecipeTitleComponent;
  let fixture: ComponentFixture<RecipeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
