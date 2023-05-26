import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NoteFromDB } from '../Types';
import { UserActionService } from '../services/user-action.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss'],
})
export class NoteEditorComponent implements OnChanges {
  @Input() noteData: NoteFromDB;
  @Input() canEdit: boolean;
  @Output() inputEventEmiiter = new EventEmitter();
  constructor(public service: UserActionService) {}

  @ViewChild('textarea') textarea: ElementRef;
  ngOnChanges(changes: any) {
    if (!(changes.canEdit === undefined) && changes.canEdit.currentValue) {
      setTimeout(() => {
        this.textarea.nativeElement.focus();
      }, 0);
    }
  }

  onInput(event: any) {
    this.inputEventEmiiter.emit(event.target.value);
  }
}
