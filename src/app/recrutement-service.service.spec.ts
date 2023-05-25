import { TestBed } from '@angular/core/testing';

import { RecrutementServiceService } from './recrutement-service.service';

describe('RecrutementServiceService', () => {
  let service: RecrutementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecrutementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
