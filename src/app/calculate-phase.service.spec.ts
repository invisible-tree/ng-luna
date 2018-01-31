import { TestBed, inject } from '@angular/core/testing';

import { CalculatePhaseService } from './calculate-phase.service';

describe('CalculatePhaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatePhaseService]
    });
  });

  it('should be created', inject([CalculatePhaseService], (service: CalculatePhaseService) => {
    expect(service).toBeTruthy();
  }));
});
