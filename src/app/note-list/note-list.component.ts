import { Component, Input } from '@angular/core';
import Note from '../Note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent {
  @Input() arrayOfNotes: Array<Note>;
  constructor() {}
}
