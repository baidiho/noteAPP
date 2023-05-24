import { Injectable } from '@angular/core';
import { ModalActions, Note } from '../Types';
import { DataBaseService } from './data-base.service';

@Injectable()
export class NotesCardDataService {
  notesDataArray: Array<Note>;
  chosenNoteIndex: number;
  isNoteChosen: boolean = false;
  notesEditableModeOn: boolean = false;
  modalOpen: boolean = false;

  constructor(public IDB: DataBaseService) {}

  onPageLoad() {
    this.IDB.IDBinit().subscribe((value) => {
      this.notesDataArray = value;
    });
  }
  //........................................View the chosen note........................................
  openEditor(i: number) {
    this.notesEditableModeOn = false;
    this.chosenNoteIndex = i;
    this.isNoteChosen = true;
  }

  //........................................Handle buttons from navigation panel (add, edit, delete)........................................
  navBarButtonHandler(type: string) {
    switch (type) {
      case 'add':
        this.openModalWindow();
        break;
      case 'delete':
        if (this.isNoteChosen) {
          this.notesDataArray.splice(this.chosenNoteIndex, 1);
          this.isNoteChosen = false;
        }
        break;
      case 'edit':
        this.notesEditableModeOn = true;
        break;
    }
  }
  openModalWindow() {
    this.modalOpen = true;
  }
  closeModalWindow() {
    this.modalOpen = false;
  }

  //........................................Handle the action from the modal window (submit or close window)........................................
  modalWindowAction(obj: ModalActions) {
    if (obj.action == 'submit') {
      const newNote: Note = {
        title: obj.noteTitle,
        date: new Date().toString(),
        text: '',
      };
      this.notesDataArray.push(newNote);
      this.closeModalWindow();
    } else if (obj.action == 'close') {
      this.closeModalWindow();
    }
  }
}
