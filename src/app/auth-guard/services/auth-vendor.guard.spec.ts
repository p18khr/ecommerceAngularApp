import { TestBed } from '@angular/core/testing';

import { AuthVendorGuard } from './auth-vendor.guard';

describe('AuthVendorGuard', () => {
  let guard: AuthVendorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthVendorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
