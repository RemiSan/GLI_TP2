import { TestBed } from '@angular/core/testing';

import { PokeInfoServiceService } from './poke-info-service.service';

describe('PokeInfoServiceService', () => {
  let service: PokeInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
