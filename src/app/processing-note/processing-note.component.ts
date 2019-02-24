import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AnalysisDaoService} from '../analysis/analysis-dao.service';
import {AnalysisService} from '../analysis/analysis.service';
import {NoteDaoService} from '../note/note-dao.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-processing-note',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './processing-note.component.html',
  styleUrls: ['./processing-note.component.scss']
})
export class ProcessingNoteComponent implements OnInit {

  @Input()
  noteId: string;

  constructor(private analysisDao: AnalysisDaoService,
              private notesDao: NoteDaoService,
              private analysisService: AnalysisService,
              private router: Router) {
  }

  ngOnInit() {
    this.processNote();
  }

  async processNote() {
    const userId = await this.analyse();
    await this.router.navigate(['/result', userId]);
  }

  async analyse(): Promise<string> {
    const key = {id: this.noteId};
    const note = await this.notesDao.find(key);
    const existingAnalysis = await this.analysisDao.find(key);
    if (!existingAnalysis.exists) {
      console.log('No analysis found, requesting entities');
      const entities = await this.analysisService.getEntities(note.item.text);
      await this.analysisDao.save([
        {
          id: note.item.id,
          entities,
          userId: note.item.userId
        }
      ]);
    }
    return note.item.userId;
  }

}
