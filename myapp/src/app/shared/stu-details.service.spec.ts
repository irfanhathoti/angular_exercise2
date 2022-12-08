import { TestBed } from '@angular/core/testing';

import { StuDetailsService } from './stu-details.service';

describe('StuDetailsService', () => {
  let service: StuDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StuDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
