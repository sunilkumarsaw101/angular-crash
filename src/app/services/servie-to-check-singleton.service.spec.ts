import { TestBed } from '@angular/core/testing';

import { ServieToCheckSingletonService } from './servie-to-check-singleton.service';

describe('ServieToCheckSingletonService', () => {
  let service: ServieToCheckSingletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServieToCheckSingletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
