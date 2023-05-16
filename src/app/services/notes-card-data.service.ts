import { Injectable } from '@angular/core';
import Note from '../Note';

@Injectable({
  providedIn: 'root',
})
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
  constructor() {}
  pushToEditPanel(i: number) {
    this.isNoteChosen = false;
    this.chosenElementIndex = i;
    this.isNoteChosen = true;
  }
 
}
