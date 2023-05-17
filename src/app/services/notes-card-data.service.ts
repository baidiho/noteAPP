import { Injectable } from '@angular/core';
import Note from '../Note';

@Injectable()
export class NotesCardDataService {
  notesDataArray: Array<Note> = [
    {
      id: 1,
      title: 'First note title',
      date: '01/21/1995',
      text: 'This is my date of birthday',
    },
    {
      id: 2,
      title: 'Second note title',
      date: '02/20/1986',
      text: 'This Tonya`s  date of birthday',
    },
  ];
  chosenElementIndex: number;
  isNoteChosen: boolean = false;
  notesEditableModeOn: boolean = false;

  pushToEditPanel(i: number) {
    this.notesEditableModeOn = false;
    this.chosenElementIndex = i;
    this.isNoteChosen = true;
  }

  navBarButtonHandler(type: string) {
    switch (type) {
      case 'add':
        const noteMockData = {
          title: 'New dynamic component title',
          date: new Date().toString(),
          text: 'I am new component that was created dynamically',
        };
        this.notesDataArray.push(noteMockData);
        break;
      case 'delete':
        if (this.isNoteChosen && this.chosenElementIndex != null) {
          this.notesDataArray.splice(this.chosenElementIndex, 1);
          this.isNoteChosen = false;
          this.chosenElementIndex = -1;
        }
        break;
      case 'edit':
        this.notesEditableModeOn = true;
        break;
      default:
        break;
    }
  }
}
