import { TestBed } from '@angular/core/testing';

import { TicketStateService } from './ticket-state.service';

describe('TicketStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketStateService = TestBed.get(TicketStateService);
    expect(service).toBeTruthy();
  });
});
