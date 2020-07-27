import { TestBed } from '@angular/core/testing';

import { HomeSearchService } from './home-search.service';

describe('HomeSearchService', () => {
  let service: HomeSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
