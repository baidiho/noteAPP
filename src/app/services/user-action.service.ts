import { Injectable } from '@angular/core';
import { ModalActions, NoteFromDB, NoteToDB } from '../Types';
import { DataBaseService } from './data-base.service';

@Injectable()
export class NotesCardDataService {
  notesDataArray: Array<NoteFromDB>;
  chosenNoteId: number;
  chosenNoteIndex: number;
  isNoteChosen: boolean = false;
  notesEditableModeOn: boolean = false;
  modalOpen: boolean = false;
  filteredArray: Array<any>;
  constructor(public IDB: DataBaseService) {}

  onPageLoad() {
    this.IDB.IDBinit().subscribe((value) => {
      this.notesDataArray = value;
    });
  }
  //........................................View the chosen note........................................
  openEditor(id: number, i: number) {
    this.notesEditableModeOn = false;
    this.chosenNoteId = id;
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
          this.IDB.deleteNoteFromDB(this.chosenNoteId).subscribe({
            next: (value) => {
              this.notesDataArray = value;
            },
            error: (err) => {
              console.log(err);
            },
          });
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
  searchHandler(event: string) {
    this.filteredArray = this.notesDataArray.filter((obj) => {
      return obj.title.toLowerCase().includes(event);
    });
  }

  //........................................Handle the action from the modal window (submit or close window)........................................
  modalWindowAction(obj: ModalActions) {
    if (obj.action == 'submit') {
      const newNote: NoteToDB = {
        title: obj.noteTitle,
        date: new Date().toString(),
        text: '',
      };
      this.IDB.addNoteToDB(newNote).subscribe((value) => {
        this.notesDataArray = value;
      });
      this.closeModalWindow();
    } else if (obj.action == 'close') {
      this.closeModalWindow();
    }
  }
  editingNote(title: string) {
    this.IDB.editNoteAtDB(title, this.chosenNoteId).subscribe((value) => {
      this.notesDataArray = value;
    });
  }
}
