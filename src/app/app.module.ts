import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { NoteCardComponent } from './notes-list/note-card/note-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotesListComponent,
    NoteEditorComponent,
    NoteCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
