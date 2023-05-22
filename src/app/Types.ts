export interface Note {
  title: string;
  date: string;
  text: string;
  id?: number;
}

export interface ModalActions {
  action: string;
  noteTitle: string;
}
