import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user/user';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent implements OnInit {

  selectedUser: User;

  @Input()
  users: User[];

  constructor() { }

  ngOnInit() {
    this.selectedUser = this.users[0];
  }

}
