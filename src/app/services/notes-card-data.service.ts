import { Injectable } from '@angular/core';
import { ModalActions, Note } from '../Types';

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
  modalOpen: boolean = false;
  //Choose the
  pushToEditPanel(i: number) {
    this.notesEditableModeOn = false;
    this.chosenElementIndex = i;
    this.isNoteChosen = true;
  }
  //Handle buttons from navigation panel (add, edit, delete)
  navBarButtonHandler(type: string) {
    switch (type) {
      case 'add':
        const noteMockData = {
          title: 'New dynamic component title',
          date: new Date().toString(),
          text: 'I am new component that was created dynamically',
        };
        this.notesDataArray.push(noteMockData);
        this.openModalWindow();
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
  openModalWindow() {
    this.modalOpen = true;
  }
  closeModalWindow() {
    this.modalOpen = false;
  }
  //Handle the action inside the modal window (submit or close window)
  modalWindowAction(obj: ModalActions) {
    if (obj.action == 'submit') {
      //Add note to DB
      this.closeModalWindow();
      console.log(obj.noteTitle);
    } else if (obj.action == 'close') {
      this.closeModalWindow();
    }
  }
  addNoteToDB() {}
  editNoteInDB() {}
  deleteNoteInDB() {}
}
