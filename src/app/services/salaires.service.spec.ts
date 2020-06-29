import { TestBed } from '@angular/core/testing';

import { SalairesService } from './salaires.service';

describe('SalairesService', () => {
  let service: SalairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
