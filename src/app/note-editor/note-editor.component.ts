import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss'],
})
export class NoteEditorComponent implements OnInit {
  @Input() date: string;

  constructor() {}

  ngOnInit(): void {}
}
