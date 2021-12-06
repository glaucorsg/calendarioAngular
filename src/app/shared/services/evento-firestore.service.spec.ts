import { TestBed } from '@angular/core/testing';

import { EventoFirestoreService } from './evento-firestore.service';

describe('EventoFirestoreService', () => {
  let service: EventoFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
