import { TestBed } from '@angular/core/testing';

import { WashService } from './wash.service';

describe('WashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WashService = TestBed.get(WashService);
    expect(service).toBeTruthy();
  });
});
