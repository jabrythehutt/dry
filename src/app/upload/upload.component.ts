import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import {UserDaoService} from '../user/user-dao.service';
import {NoteDaoService} from '../note/note-dao.service';
import {Note} from '../note/note';
import {Router} from '@angular/router';
import * as existingUserNotes from '../../../scripts/notes-by-user.json';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  usersPromise: Promise<User[]>;
  text = existingUserNotes.data[0].notes[0];

  private sUser: User;

  get selectedUser(): User {
    return this.sUser;
  }

  set selectedUser(u: User) {
    this.sUser = u;
    if (u) {
      this.text = existingUserNotes.data[0].name === u.name ? existingUserNotes.data[0].notes[0] : '';
    }

  }

  constructor(private usersDao: UserDaoService,
              private notesDao: NoteDaoService,
              private router: Router) { }

  ngOnInit() {
   this.usersPromise = this.usersDao.list();
  }

  async saveNote(): Promise<Note> {
    const note = await this.notesDao.createNote(this.selectedUser, this.text);
    await this.notesDao.saveNote(note);
    return note;
  }

  async goClicked() {
    const note = await this.saveNote();
    await this.router.navigate(['/processing', note.id]);
  }

}
