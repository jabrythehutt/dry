import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AwsService} from '../aws.service';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.scss']
})
export class ProcessingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private awsService: AwsService) {
  }

  ngOnInit() {
  }

}
