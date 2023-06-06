import { Component, Input } from '@angular/core';
import { NoteFromDB } from '../Types';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent {
  @Input() arrayOfNotes: Array<NoteFromDB>;
  identify(index: number, item: NoteFromDB) {
    return item.title;
  }
}
