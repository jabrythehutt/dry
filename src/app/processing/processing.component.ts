import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TitleService} from '../title.service';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.scss']
})
export class ProcessingComponent implements OnInit {

  constructor(public route: ActivatedRoute, private titleService: TitleService) {
  }

  ngOnInit() {
    this.titleService.title = 'Processing your note in the cloud';
  }

}
