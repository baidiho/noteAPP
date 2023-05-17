import { Component, ViewContainerRef } from '@angular/core';
import { NotesCardDataService } from './services/notes-card-data.service';
ViewContainerRef;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public service: NotesCardDataService) {}
}
