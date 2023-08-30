import { TestBed } from '@angular/core/testing';

import { QuaterService } from './quater.service';

describe('QuaterService', () => {
  let service: QuaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
