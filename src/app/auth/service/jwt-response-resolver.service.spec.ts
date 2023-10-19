import { TestBed } from '@angular/core/testing';

import { JwtResponseResolver } from './jwt-response-resolver.service';

describe('JwtResponseResolverService', () => {
  let service: JwtResponseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtResponseResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
