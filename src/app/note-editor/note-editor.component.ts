import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { Note } from '../Types';
import { NotesCardDataService } from '../services/notes-card-data.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss'],
})
export class NoteEditorComponent implements OnChanges {
  @Input() noteData: Note;
  @Input() i: Note;
  @Input() canEdit: boolean;

  constructor(public service: NotesCardDataService) {}
  @ViewChild('textarea') textarea: ElementRef;
  ngOnChanges(changes: any) {
    if (!(changes.canEdit === undefined)) {
      if (changes.canEdit.currentValue) {
        setTimeout(() => {
          this.textarea.nativeElement.focus();
        }, 0);
      }
    }
  }
}
