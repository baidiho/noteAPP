import { Component, Input } from '@angular/core';
import Note from '../Note';
import { NotesCardDataService } from '../services/notes-card-data.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss'],
})
export class NoteEditorComponent {
  @Input() noteData: Note;
  @Input() i: Note;
  @Input() canEdit: boolean;
  text: string;

  constructor(public service: NotesCardDataService) {}
}
