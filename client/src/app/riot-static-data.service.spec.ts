import { TestBed, inject } from '@angular/core/testing';

import { RiotStaticDataService } from './riot-static-data.service';

describe('RiotStaticDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiotStaticDataService]
    });
  });

  it('should be created', inject([RiotStaticDataService], (service: RiotStaticDataService) => {
    expect(service).toBeTruthy();
  }));
});
