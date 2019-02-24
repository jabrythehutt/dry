import {Component, ViewEncapsulation} from '@angular/core';
import {fadeAnimation} from '../animations';
import {TitleService} from './title.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {

  constructor(private titleService: TitleService) {
  }

  get title(): string {
    return this.titleService.title;
  }
}
