import { TestBed } from '@angular/core/testing';

import { CustomCanDeactivateGuardGuard } from './custom-can-deactivate-guard.guard';

describe('CustomCanDeactivateGuardGuard', () => {
  let guard: CustomCanDeactivateGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomCanDeactivateGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
