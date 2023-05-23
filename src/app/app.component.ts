import { Component, ViewContainerRef } from '@angular/core';
import { DataBaseService } from './services/data-base.service';
import { NotesCardDataService } from './services/user-action.service';
ViewContainerRef;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public service: NotesCardDataService,
    public IDB: DataBaseService
  ) {}

  createDB() {
    this.IDB.initDB();
  }
  deleteDB() {
    this.IDB.deleteDB();
  }
}
