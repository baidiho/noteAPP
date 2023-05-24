import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DataBaseService } from './services/data-base.service';
import { NotesCardDataService } from './services/user-action.service';
ViewContainerRef;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public service: NotesCardDataService,
    public IDB: DataBaseService
  ) {}
  ngOnInit(): void {
    this.service.onPageLoad();
  }

  deleteDB() {
    this.IDB.deleteDB();
  }
}
