import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDevsComponent } from './about-devs.component';

describe('AboutDevsComponent', () => {
  let component: AboutDevsComponent;
  let fixture: ComponentFixture<AboutDevsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDevsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
