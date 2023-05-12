import { Component, Input, OnInit } from '@angular/core';
import Note from '../Note';
import { NotesCardDataService } from '../services/notes-card-data.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss'],
})
export class NoteEditorComponent implements OnInit {
  @Input() noteData: Note;
  @Input() i: Note;

  constructor(public service: NotesCardDataService) {}

  ngOnInit(): void {}
}
