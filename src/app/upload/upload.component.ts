import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  users: User[] = ['James', "Richard", "Jane", "Oliver"].map(name => ({name, id: name}));

  constructor() { }

  ngOnInit() {
  }

}
