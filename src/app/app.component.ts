import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <app-menu-bar/>
    </header>

    <router-outlet></router-outlet>
  `,
  styles: [
    'header{display:flex;justify-content:center;}'
  ]
})
export class AppComponent {
  title = 'angular-blog';
}
