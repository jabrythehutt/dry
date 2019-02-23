import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user/user';
import {UserDaoService} from '../user/user-dao.service';
import {Optional} from '../data/optional';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss']
})
export class UserResultComponent implements OnInit {

  @Input()
  userId: string;

  userPromise: Promise<Optional<User>>;

  constructor(private dao: UserDaoService) { }

  ngOnInit() {
    this.userPromise = this.dao.find({id: this.userId});
  }

}
