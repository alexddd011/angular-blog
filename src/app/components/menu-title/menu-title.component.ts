import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  template: `
    <div class="menu__title__container">
      <hr>
      <h1>THE BLOG</h1>
      <hr>
    </div>
  `,
  styles: [
    'hr{margin:5px 0;}',
    'h1{color:#FFF; margin-top:5px;margin-bottom:5px;font-size:90px;text-align:center;font-weight:bolder;font-family:"segoe UI";}',
    '@media screen and (max-width:600px){h1{font-size:30px;}}'
  ]
})
export class MenuTitleComponent {

}
