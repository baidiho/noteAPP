import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
ViewContainerRef;
import { NotesCardDataService } from './services/notes-card-data.service';
import { NoteCardComponent } from './note-list/note-card/note-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('dynamicCard', { read: ViewContainerRef }) // Нужно разобраться причём очень основательно
  private viewRef: ViewContainerRef;

  private componentRef: ComponentRef<NoteCardComponent>;
  isChosenNote: boolean = false;
  constructor(public service: NotesCardDataService) {}
  ngOnInit(): void {
    console.dir();
  }
  buttonHandler(type: string) {
    switch (type) {
      case 'add':
        /*Пересмотреть этот кусок кода*/
        // this.componentRef = this.viewRef.createComponent(NoteCardComponent);
        const noteMockData = {
          title: 'New dynamic component title',
          date: new Date().toString(),
          text: 'I am new component that was created dynamically',
        };
        /*И этот тоже */
        // this.componentRef.instance.note = noteMockData;
        this.service.notesDataArray.push(noteMockData);
        break;
      case 'delete':
        if (this.service.isNoteChosen) {
          this.service.notesDataArray.splice(
            this.service.chosenElementIndex,
            1
          );
          this.service.isNoteChosen = false;
        }

        break;
      case 'edit':
        this.service.notesEditableModeOn = true;
        break;

      default:
        break;
    }
  }
}
