export interface NoteToDB {
  title: string;
  date: string;
  text: string;
}
export interface NoteFromDB extends NoteToDB {
  id: number;
}
export type ArrayOfNote = Array<NoteFromDB>;
export interface ModalActions {
  action: string;
  noteTitle: string;
}
export interface DatabasesObject {
  name: string;
  version: number;
}
