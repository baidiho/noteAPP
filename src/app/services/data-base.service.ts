import { Injectable, OnInit } from '@angular/core';
import { Note } from '../Types';

@Injectable()
export class DataBaseService {
  request: any;
  deleteRequest: any;
  db: IDBDatabase;
  objectStore: IDBObjectStore;
  constructor() {}

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
  get() {
    let transaction = this.db.transaction('NotesStore', 'readonly');
    const objectS = transaction.objectStore('NotesStore');
    const request = objectS.getAll();
    request.onsuccess = (event: any) => {
      console.log(request.result);
    };
  }
}
