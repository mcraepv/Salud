import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTitleComponent } from './about-title.component';

describe('AboutTitleComponent', () => {
  let component: AboutTitleComponent;
  let fixture: ComponentFixture<AboutTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
