import { Component } from '@angular/core';
import User from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements User {
  state: boolean = false;
  onClick(event: any) {
    console.dir(event.target.textContent);
  }
}
