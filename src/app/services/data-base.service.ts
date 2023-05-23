import { Injectable, OnInit } from '@angular/core';
import { DatabasesObject, Note } from '../Types';

@Injectable()
export class DataBaseService {
  request: any;
  deleteRequest: any;
  db: IDBDatabase;
  objectStore: IDBObjectStore;

  IDBinit() {
    const openRequest: IDBOpenDBRequest = window.indexedDB.open('NotesDB', 1);

    //........................................Check for errors........................................
    openRequest.onerror = (err) => {
      console.log('I am opening error and this is information about me', err);
    };

    //........................................Check if the DB already exist and create it........................................
    openRequest.onupgradeneeded = (event: any) => {
      console.log(event.target);
      this.db = event.target.result;
      if (!this.db.objectStoreNames.contains('NotesStore')) {
        this.db.createObjectStore('NotesStore', {
          keyPath: 'id',
          autoIncrement: true,
        });
        console.log('Log inside upgradeneeded', this.db);
      }
    };

    //........................................Write the db variable for further using........................................
    openRequest.onsuccess = (event: any) => {
      this.db = event.target.result;
      console.log('Log inside success', this.db);
      //........................................Read the data and fill the array for view........................................
      this.getAllNotesFromDB();
    };
  }

  getAllNotesFromDB() {
    const transaction = this.db.transaction('NotesStore', 'readonly');
    const objectStore = transaction.objectStore('NotesStore');
    const request = objectStore.getAll();
    request.onerror = (err) => {
      console.log('Error while getting data from store', err);
    };
    request.onsuccess = (event: any) => {
      console.log('Data successefully read');
      return event.target.result;
    };
  }
  initDB() {
    const promise = indexedDB.databases();
    promise.then((databases) => {
      databases.forEach((db) => {
        if (db.name == 'NotesDB') {
          console.log('Already exist');
          return;
        }
      });
      this.request = window.indexedDB.open('NotesDB', 1);
      this.request.onerror = (error: any) => {
        console.log(error);
      };

      this.request.onupgradeneeded = () => {
        this.db = this.request.result;
        if (!this.db.objectStoreNames.contains('NotesStore')) {
          this.db.createObjectStore('NotesStore', {
            keyPath: 'id',
            autoIncrement: true,
          }); // создаём хранилище
        }
        console.log(this.db);
      };
      this.request.onsuccess = (event: any) => {
        this.db = event.target.result;
        console.log('Data base was created', this.db);
      };
    });
  }
  deleteDB() {
    this.deleteRequest = window.indexedDB.deleteDatabase('NotesDB');
    this.deleteRequest.onsuccess = (event: any) => {
      console.log('Database deleted successfully');
      console.log(event.result); // should be undefined
    };
  }
  add() {
    let transaction = this.db.transaction('NotesStore', 'readwrite');
    const element: Note = {
      title: 'Title from',
      date: new Date().toString(),
      text: '',
    };
    const objectS = transaction.objectStore('NotesStore');
    let request = objectS.add(element);
    request.onsuccess = () => {
      console.log(request.result);
    };
  }
}
