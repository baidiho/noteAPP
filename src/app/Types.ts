export interface Note {
  title: string;
  date: string;
  text: string;
  id?: number;
}
export interface NoteToDB extends Note {
  
}
export type ArrayOfNote = Array<Note>;
export interface ModalActions {
  action: string;
  noteTitle: string;
}
export interface DatabasesObject {
  name: string;
  version: number;
}
