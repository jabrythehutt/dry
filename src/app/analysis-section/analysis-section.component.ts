import {Component, Input, OnInit} from '@angular/core';
import {AnalysisSection} from './analysis.section';
import {Note} from '../note/note';
import {NoteDaoService} from '../note/note-dao.service';
import {Optional} from '../data/optional';

@Component({
  selector: 'app-analysis-section',
  templateUrl: './analysis-section.component.html',
  styleUrls: ['./analysis-section.component.scss']
})
export class AnalysisSectionComponent implements OnInit {

  @Input()
  section: AnalysisSection;

  notePromise: Promise<Optional<Note>>;

  constructor(private noteDao: NoteDaoService) { }

  ngOnInit() {
    this.notePromise = this.noteDao.find({id: this.section.noteId});
  }

}
