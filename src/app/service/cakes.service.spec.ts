import { TestBed } from '@angular/core/testing';

import { CakesService } from './cakes.service';

describe('CakesService', () => {
  let service: CakesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
