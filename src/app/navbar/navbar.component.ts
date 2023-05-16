import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onClickEvent(event: any) {
    let button = event.target.closest('button');
    if (!button) {
      return;
    }
    switch (button.textContent) {
      case 'add':
        console.log('I am add button');
        break;
      case 'delete':
        console.log('I am delete button');
        break;
      case 'edit_note':
        console.log('I am edit button');
        break;

      default:
        console.log('nothing');
        break;
    }
  }
}
