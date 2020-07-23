import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageJumbotronComponent } from './front-page-jumbotron.component';

describe('FrontPageJumbotronComponent', () => {
  let component: FrontPageJumbotronComponent;
  let fixture: ComponentFixture<FrontPageJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPageJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
