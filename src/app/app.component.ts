import { Component, OnInit } from '@angular/core';
import Note from './Note';
import { NotesCardDataService } from './services/notes-card-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isChosenNote: boolean = false;
  constructor(public service: NotesCardDataService) {}
  ngOnInit(): void {
   
  }
  
}
