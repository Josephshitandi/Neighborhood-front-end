import { TestBed } from '@angular/core/testing';

import { NeighborhoodServiceService } from './neighborhood-service.service';

describe('NeighborhoodServiceService', () => {
  let service: NeighborhoodServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeighborhoodServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
