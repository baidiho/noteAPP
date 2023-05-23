import { Component, Input } from '@angular/core';
import { Note } from 'src/app/Types';
import { NotesCardDataService } from '../../services/user-action.service';

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
