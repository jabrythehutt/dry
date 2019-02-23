import {Component, Input, OnInit} from '@angular/core';
import {Analysis} from './analysis';
import {EntityType} from 'aws-sdk/clients/comprehend';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  entityTypes: EntityType[] = ['PERSON', 'LOCATION', 'EVENT'];

  @Input()
  userAnalysisResults: Analysis[];

  constructor() { }

  ngOnInit() {
  }

}
