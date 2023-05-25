import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { NoteToDB } from '../Types';
import { ArrayOfNote } from './../Types';

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
      const request = this.db
        .transaction('NotesStore', 'readonly')
        .objectStore('NotesStore')
        .getAll();

      request.onsuccess = (event: any) => {
        subscriber.next(event.target.result);
      };
      request.onerror = () => {
        subscriber.error(console.log('Error while getting data transaction'));
      };
    }).pipe(take(1));
  }

  addNoteToDB(note: NoteToDB) {
    return new Observable<ArrayOfNote>((subscriber) => {
      const request = this.db
        .transaction('NotesStore', 'readwrite')
        .objectStore('NotesStore')
        .add(note);

      request.onsuccess = () => {
        this.getAllNotesFromDB().subscribe((x) => {
          subscriber.next(x);
        });
      };
    }).pipe(take(1));
  }

  deleteNoteFromDB(id: number) {
    return new Observable<ArrayOfNote>((subscriber) => {
      const request = this.db
        .transaction('NotesStore', 'readwrite')
        .objectStore('NotesStore')
        .delete(id);
      request.onsuccess = () => {
        this.getAllNotesFromDB().subscribe((x) => {
          subscriber.next(x);
        });
      };
      request.onerror = () => subscriber.error('Error while deleting note');
    }).pipe(take(1));
  }
  editNoteAtDB(text: string, id: number) {
    return new Observable<ArrayOfNote>((subscriber) => {
      const request = this.db
        .transaction('NotesStore', 'readwrite')
        .objectStore('NotesStore')
        .openCursor();

      request.onsuccess = () => {
        let cursor = request.result;
        if (cursor?.value.id == id) {
          const data: any = cursor.value;
          data.text = text;
          data.date = new Date().toString();
          cursor.update(data);
          this.getAllNotesFromDB().subscribe((x) => {
            subscriber.next(x);
          });
          return;
        }

        cursor?.continue();
      };
    }).pipe(take(1));
  }

  deleteDB() {
    this.deleteRequest = window.indexedDB.deleteDatabase('NotesDB');
    this.deleteRequest.onsuccess = (event: any) => {};
  }
}
