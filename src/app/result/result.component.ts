import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
