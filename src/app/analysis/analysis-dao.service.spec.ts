import { TestBed } from '@angular/core/testing';

import { AnalysisDaoService } from './analysis-dao.service';

describe('AnalysisDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalysisDaoService = TestBed.get(AnalysisDaoService);
    expect(service).toBeTruthy();
  });
});
