import { TestBed } from '@angular/core/testing';

import { SharedCommonService } from './shared-common-service';

describe('SharedCommonService', () => {
  let service: SharedCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
