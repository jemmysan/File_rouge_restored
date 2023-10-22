import { TestBed } from '@angular/core/testing';

import { SessioncoursService } from './sessioncours.service';

describe('SessioncoursService', () => {
  let service: SessioncoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessioncoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
