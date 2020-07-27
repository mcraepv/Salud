import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutResourcesComponent } from './about-resources.component';

describe('AboutResourcesComponent', () => {
  let component: AboutResourcesComponent;
  let fixture: ComponentFixture<AboutResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
