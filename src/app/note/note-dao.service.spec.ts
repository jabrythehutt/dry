import { TestBed } from '@angular/core/testing';

import { NoteDaoService } from './note-dao.service';

describe('NoteDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteDaoService = TestBed.get(NoteDaoService);
    expect(service).toBeTruthy();
  });
});
