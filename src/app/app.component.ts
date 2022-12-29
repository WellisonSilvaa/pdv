import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder', icon: 'home', color: 'dark' },
    { title: 'Usuários', url: '/usuarios', icon: 'people', color: 'dark'},

  ];

  constructor() {}
}
