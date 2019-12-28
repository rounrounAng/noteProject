import { TestBed } from '@angular/core/testing';

import { AppMockServiceService } from './app-mock-service.service';

describe('AppMockServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppMockServiceService = TestBed.get(AppMockServiceService);
    expect(service).toBeTruthy();
  });
});
