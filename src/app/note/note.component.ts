import {Component, Input, OnInit} from '@angular/core';
import {NoteDaoService} from './note-dao.service';
import {Note} from './note';
import {Optional} from '../data/optional';
import {TitleService} from '../title.service';
import {UserDaoService} from '../user/user-dao.service';
import {DatePipe} from '@angular/common';

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

  constructor(private noteDao: NoteDaoService,
              private userDao: UserDaoService,
              private titleService: TitleService,
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.titleService.colour = 'primary';
    this.notePromise = this.noteDao.find({id: this.noteId});
    this.applyTitle();
  }

  async applyTitle() {
    const note = await this.notePromise;
    const userId = note.item.userId;
    const user = await this.userDao.find({id: userId});
    this.titleService.title = `${user.item.name} notes`;
  }

}
