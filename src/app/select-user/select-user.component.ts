import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user/user';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent implements OnInit {

  private u: User;

  @Input()
  set selectedUser( u: User) {
    this.u = u;
    this.selectedUserChange.emit(u);
  }

  get selectedUser(): User {
    return this.u;
  }

  @Output()
  selectedUserChange: EventEmitter<User> = new EventEmitter();

  @Input()
  users: User[];

  constructor() { }

  ngOnInit() {
    this.selectedUser = this.users[0];
  }

}
