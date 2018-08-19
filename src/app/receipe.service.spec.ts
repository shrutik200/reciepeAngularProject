import { TestBed, inject } from '@angular/core/testing';

import { ReceipeService } from './receipe.service';

describe('ReceipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceipeService]
    });
  });

  it('should be created', inject([ReceipeService], (service: ReceipeService) => {
    expect(service).toBeTruthy();
  }));
});
