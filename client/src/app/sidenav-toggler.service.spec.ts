import { TestBed } from '@angular/core/testing';

import { SidenavTogglerService } from './sidenav-toggler.service';

describe('SidenavTogglerService', () => {
  let service: SidenavTogglerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavTogglerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
