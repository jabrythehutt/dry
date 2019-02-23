import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import {UserDaoService} from '../user/user-dao.service';
import {NoteDaoService} from '../note/note-dao.service';
import {Note} from '../note/note';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  usersPromise: Promise<User[]>;

  selectedUser: User;
  text = 'Taylor has symptoms of a depressive disorder are described. His depressive symptoms began insidiously over a period of months' +
    ' after the loss of his father, Johaquim in June 2017. He describes episodes of chronic or daily depression. He is no longer enjoying '
    +
    'previously enjoyed activities. He denies suicidal ideas or intentions. His self care is reduced and less attention is being paid to ' +
    'these tasks. He is socially isolated, even more now. Sleep problems are reported. Difficulty staying asleep is also reported. ' +
    'The family psychiatric history is negative. There is no other history of psychiatric disorders, psychiatric treatment or' +
    ' hospitalisation, suicidal behaviours or substance abuse in closely related family members. Potential altercation with Joanne ' +
    'when on a trip to Manchester.';

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
