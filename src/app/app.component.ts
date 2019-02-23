import {Component, ViewEncapsulation} from '@angular/core';
import {fadeAnimation} from '../animations';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'DRY';
}
