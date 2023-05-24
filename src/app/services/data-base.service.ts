import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ArrayOfNote, NoteToDB } from '../Types';

@Injectable()
export class DataBaseService {
  request: any;
  deleteRequest: any;
  db: IDBDatabase;
  objectStore: IDBObjectStore;

  /*
   *First time ititialize the DB and immediately call getAllNotesFromDB() for rendering list of notes
   */

  IDBinit() {
    return new Observable<ArrayOfNote>((subscriber) => {
      const openRequest: IDBOpenDBRequest = window.indexedDB.open('NotesDB', 1);

      //........................................Check for errors........................................
      openRequest.onerror = (err) => {
        subscriber.error(
          console.log(
            'I am opening error and this is information about me',
            err
          )
        );
      };

      //........................................Check if the DB already exist and create it........................................
      openRequest.onupgradeneeded = (event: any) => {
        this.db = event.target.result;
        if (!this.db.objectStoreNames.contains('NotesStore')) {
          this.db.createObjectStore('NotesStore', {
            keyPath: 'id',
            autoIncrement: true,
          });
        }
      };

      //........................................Write the db variable for further using........................................
      openRequest.onsuccess = (event: any) => {
        this.db = event.target.result;

        //........................................Read the data and fill the array for view........................................
        this.getAllNotesFromDB().subscribe((x) => subscriber.next(x));
      };
    }).pipe(take(1));
  }

  getAllNotesFromDB() {
    return new Observable<ArrayOfNote>((subscriber) => {
      //........................................CHeck for DB is already exist........................................
      if (!this.db) {
        console.log('There is no DB');
        return;
      }
      const transaction = this.db.transaction('NotesStore', 'readonly');
      const objectStore = transaction.objectStore('NotesStore');
      const request = objectStore.getAll();

      request.onsuccess = (event: any) => {
        subscriber.next(event.target.result);
      };
      transaction.onerror = () => {
        subscriber.error(console.log('Error while getting data transaction'));
      };
    }).pipe(take(1));
  }

  addNoteToDB(note: NoteToDB) {
    return new Observable<ArrayOfNote>((subscriber) => {
      const transaction = this.db.transaction('NotesStore', 'readwrite');
      const objectStore = transaction.objectStore('NotesStore');
      const request = objectStore.add(note);
      request.onsuccess = () => {
        this.getAllNotesFromDB().subscribe((x) => {
          subscriber.next(x);
        });
      };
    }).pipe(take(1));
  }
  deleteNoteFromDB (id:number) {
    return new Observable<ArrayOfNote>

  }
  deleteDB() {
    this.deleteRequest = window.indexedDB.deleteDatabase('NotesDB');
    this.deleteRequest.onsuccess = (event: any) => {};
  }
}
