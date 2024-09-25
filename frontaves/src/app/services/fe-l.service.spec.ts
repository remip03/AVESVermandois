import { TestBed } from '@angular/core/testing';

import { FeLService } from './fe-l.service';

describe('FeLService', () => {
  let service: FeLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
