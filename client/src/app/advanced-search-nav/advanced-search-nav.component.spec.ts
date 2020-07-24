import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchNavComponent } from './advanced-search-nav.component';

describe('AdvancedSearchNavComponent', () => {
  let component: AdvancedSearchNavComponent;
  let fixture: ComponentFixture<AdvancedSearchNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSearchNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
