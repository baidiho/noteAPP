import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() modalWindowEmiter = new EventEmitter();
  valid: boolean = false;
  newNoteTitle = new FormControl('', Validators.required);

  @ViewChild('input') input: ElementRef;
  ngOnInit(): void {
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 0);
  }

  onSubmit() {
    if (!this.newNoteTitle.valid) {
      return;
    }
    this.modalWindowEmiter.emit({
      action: 'submit',
      noteTitle: this.newNoteTitle.value,
    });
  }

  onInput() {
    this.valid = this.newNoteTitle.valid;
  }

  closeWindow(event: Event) {
    const target = event.target as HTMLElement;
    if (
      target.dataset['action'] == 'close' ||
      target.closest('button')?.dataset?.['action'] == 'close'
    ) {
      this.modalWindowEmiter.emit({
        action: 'close',
      });
    }
  }
}
