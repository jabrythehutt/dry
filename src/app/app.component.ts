import {Component, ViewEncapsulation} from '@angular/core';
import {fadeAnimation} from '../animations';
import {TitleService} from './title.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {

  logoLink = location.origin;

  constructor(public titleService: TitleService,
              private route: ActivatedRoute) {
  }

  get title(): string {
    return this.titleService.title;
  }
}
