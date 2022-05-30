import { TestBed } from '@angular/core/testing';

import { LeveltestService } from './leveltest.service';

describe('LeveltestService', () => {
  let service: LeveltestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeveltestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
