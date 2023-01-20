import { TestBed } from '@angular/core/testing';

import { WeeklyPerformanceService } from './weekly-performance.service';

describe('WeeklyPerformanceService', () => {
  let service: WeeklyPerformanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyPerformanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
