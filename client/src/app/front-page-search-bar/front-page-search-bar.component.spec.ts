import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageSearchBarComponent } from './front-page-search-bar.component';

describe('FrontPageSearchBarComponent', () => {
  let component: FrontPageSearchBarComponent;
  let fixture: ComponentFixture<FrontPageSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPageSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
