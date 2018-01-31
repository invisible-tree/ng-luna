import { TestBed, inject } from '@angular/core/testing';

import { GetApiInfoService } from './get-api-info.service';

describe('GetApiInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetApiInfoService]
    });
  });

  it('should be created', inject([GetApiInfoService], (service: GetApiInfoService) => {
    expect(service).toBeTruthy();
  }));
});
