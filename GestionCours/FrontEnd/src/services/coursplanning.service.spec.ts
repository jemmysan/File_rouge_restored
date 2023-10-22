import { TestBed } from '@angular/core/testing';

import { CoursplanningService } from './coursplanning.service';

describe('CoursplanningService', () => {
  let service: CoursplanningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursplanningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
