import { Injectable, OnInit } from '@angular/core';
import { ModalActions, Note } from '../Types';

@Injectable()
export class NotesCardDataService implements OnInit {
  ngOnInit(): void {}
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
  chosenNoteIndex: number;
  isNoteChosen: boolean = false;
  notesEditableModeOn: boolean = false;
  modalOpen: boolean = false;

  //........................................View the chosen note........................................
  pushToEditPanel(i: number) {
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
  addNoteToDB() {}
  editNoteInDB() {}
  deleteNoteInDB() {}
}
