import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() buttonEventEmitter = new EventEmitter<any>();
  constructor() {}

  onButtonClick(event: Event) {
    const button = (event.target as HTMLElement).closest('button');
    if (!button) {
      return;
    }
    this.buttonEventEmitter.emit(button.dataset['buttonType']);
  }
}
