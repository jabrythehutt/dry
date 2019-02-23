import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import {UserDaoService} from '../user/user-dao.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  usersPromise: Promise<User[]>;

  selectedUser: User;
  text: string;

  constructor(private usersDao: UserDaoService) { }

  ngOnInit() {
   this.usersPromise = this.usersDao.list();
  }

  goClicked() {
    console.log(this.selectedUser);
  }

}
