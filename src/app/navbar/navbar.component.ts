import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NoteFromDB } from '../Types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() buttonEventEmitter = new EventEmitter<any>();
  @Output() searchEmmiter = new EventEmitter<string>();
  @Input() arrayOfFiltered: Array<NoteFromDB>;
  constructor() {}

  onButtonClick(event: Event) {
    const button = (event.target as HTMLElement).closest('button');
    if (!button) {
      return;
    }
    this.buttonEventEmitter.emit(button.dataset['buttonType']);
  }
  onInput(event: any) {
    this.searchEmmiter.emit(event.target.value.toLowerCase());
  }
}
