import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  template: `
    <div class="container__menu__bar">
      <ul>
        <li><a href="">Linkedin</a></li>
        <li><a href="">GitHub</a></li>
        <li><a href="">Youtube</a></li>
      </ul>
    </div>
  `,
  styles: [
    '.container__menu__bar{}',
    '.container__menu__bar > ul{display:flex;}',
    '.container__menu__bar > ul > li{list-style:none;padding:5px 20px;position:relative;}',
    '.container__menu__bar > ul > li:after{content:"";position:absolute;top:48%;right:0;width:5px;height:5px;border-radius:50%;background:var(--white);}',
    '.container__menu__bar > ul > li > a{}'
  ]
})
export class MenuBarComponent {

}
