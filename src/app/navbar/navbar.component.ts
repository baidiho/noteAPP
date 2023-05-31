import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteFromDB } from '../Types';
import { UserActionService } from '../services/user-action.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  /* In common this element  */
  @Input() notesArray: Array<NoteFromDB>;
  @Output() buttonEventEmitter = new EventEmitter<any>();
  @Output() searchEventEmitter = new EventEmitter<Array<number>>();
  filteredArray: Array<any>;

  constructor(public service: UserActionService) {}

  //.............Buttons only emits the data-type. The outer service is responsible for handling button depending on their types.
  onButtonClick(event: Event) {
    const button = (event.target as HTMLElement).closest('button');
    if (!button) {
      return;
    }
    this.buttonEventEmitter.emit(button.dataset['buttonType']);
  }
  //..............................................Search field..................................................

  onSearchInputFilter(event: any) {
    this.filteredArray = this.notesArray.filter((obj) => {
      return obj.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
  }

  onSelected(event: MatAutocompleteSelectedEvent) {
    let index: number | undefined;
    //check the index of maim data array
    for (let item of this.notesArray) {
      if (item.title === event.option.value) {
        index = this.notesArray.indexOf(item);
        break;
      }
    }
    if (index !== undefined) {
      this.searchEventEmitter.emit([this.notesArray[index].id, index]);
    }
    return;
  }
}
