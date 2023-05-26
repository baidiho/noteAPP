import { Component, Input } from '@angular/core';
import { NoteFromDB } from 'src/app/Types';
import { UserActionService } from '../../services/user-action.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent {
  @Input() note: NoteFromDB;
  @Input() i: number;
  constructor(public service: UserActionService) {}
}
