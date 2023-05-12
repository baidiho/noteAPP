import { Injectable } from '@angular/core';
import Note from '../Note';

@Injectable({
  providedIn: 'root',
})
export class NotesCardDataService {
  notesDataArray: Array<Note> = [
    {
      title: 'First note title',
      date: '01/21/1995',
      text: 'This is my date of birthday',
    },
    {
      title: 'Second note title',
      date: '02/20/1986',
      text: 'This Tonya`s  date of birthday',
    },
  ];
  chosenElementIndex: number;
  isChosenNote: boolean = false;
  constructor() {}
  pushToEditPanel(i: number) {
    this.isChosenNote = false;
    this.chosenElementIndex = i;
    this.isChosenNote = true;
  }
}
