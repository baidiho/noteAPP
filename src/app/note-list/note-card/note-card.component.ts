import { Component, Input } from '@angular/core';
import Note from 'src/app/Note';
import { NotesCardDataService } from '../../services/notes-card-data.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent {
  @Input() note: Note;
  @Input() i: number;

  constructor(public service: NotesCardDataService) {}
}
