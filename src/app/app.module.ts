import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { NoteCardComponent } from './note-list/note-card/note-card.component';
import { NoteListComponent } from './note-list/note-list.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { DataBaseService } from './services/data-base.service';
import { UserActionService } from './services/user-action.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoteEditorComponent,
    NoteCardComponent,
    TruncatePipe,
    NoteListComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  providers: [UserActionService, DataBaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
