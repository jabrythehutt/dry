import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-upload-notes',
  templateUrl: './upload-notes.component.html',
  styleUrls: ['./upload-notes.component.scss']
})
export class UploadNotesComponent implements OnInit {

  private t: string;

  @Input()
  set text(input: string) {
    this.t = input;
    this.textChange.emit(input);
  }

  get text(): string {
    return this.t;
  }

  @Output()
  textChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
