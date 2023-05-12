import { Component, Input, OnInit } from '@angular/core';
import Note from 'src/app/Note';
import { NotesCardDataService } from '../services/notes-card-data.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  constructor(public service: NotesCardDataService) {}
  @Input() note: Note;
  @Input() i: number;
  ngOnInit(): void {}
  onClick() {
    console.log(this.service.notesDataArray[this.i]);
  }
}
