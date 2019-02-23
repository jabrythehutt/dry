import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user/user';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss']
})
export class UserResultComponent implements OnInit {

  @Input()
  userId: string;

  constructor() { }

  ngOnInit() {
  }

}
