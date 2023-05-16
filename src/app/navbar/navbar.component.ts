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
    } else console.log(button);
  }
}
