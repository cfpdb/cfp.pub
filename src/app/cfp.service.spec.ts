import { TestBed } from '@angular/core/testing';

import { CfpService } from './cfp.service';

describe('CfpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CfpService = TestBed.get(CfpService);
    expect(service).toBeTruthy();
  });
});
