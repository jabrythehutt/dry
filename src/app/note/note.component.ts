import {Component, Input, OnInit} from '@angular/core';
import {NoteDaoService} from './note-dao.service';
import {Note} from './note';
import {Optional} from '../data/optional';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input()
  noteId: string;

  @Input()
  highlightText: string;

  notePromise: Promise<Optional<Note>>;

  constructor(private noteDao: NoteDaoService) { }

  ngOnInit() {
    this.notePromise = this.noteDao.find({id: this.noteId});
  }

}
