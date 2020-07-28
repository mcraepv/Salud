import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutImgComponent } from './about-img.component';

describe('AboutImgComponent', () => {
  let component: AboutImgComponent;
  let fixture: ComponentFixture<AboutImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
