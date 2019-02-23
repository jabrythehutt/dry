import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingNoteComponent } from './processing-note.component';

describe('ProcessingNoteComponent', () => {
  let component: ProcessingNoteComponent;
  let fixture: ComponentFixture<ProcessingNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
