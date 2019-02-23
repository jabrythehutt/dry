import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisSectionComponent } from './analysis-section.component';

describe('AnalysisSectionComponent', () => {
  let component: AnalysisSectionComponent;
  let fixture: ComponentFixture<AnalysisSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
