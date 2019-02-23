import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import {UserDaoService} from '../user/user-dao.service';
import {NoteDaoService} from '../note/note-dao.service';
import {Note} from '../note/note';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  usersPromise: Promise<User[]>;

  selectedUser: User;
  text: string;

  constructor(private usersDao: UserDaoService,
              private notesDao: NoteDaoService) { }

  ngOnInit() {
   this.usersPromise = this.usersDao.list();
  }

  async saveNote(): Promise<void> {
    const note = await this.notesDao.createNote(this.selectedUser, this.text);
    await this.notesDao.saveNote(note);
  }

  async goClicked() {
    await this.saveNote();
  }

}
