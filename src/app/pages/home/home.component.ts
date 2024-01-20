import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
    
    <app-menu-title/>
    <article>
      <div class="articles__main">
        <app-big-card/>
      </div>
      <div class="articles__others">
        <app-small-card/>
        <app-small-card/>
        <app-small-card/>
      </div>
    </article>
  `,
  styles: [
    'article{display:flex;justify-content:center;margin-top:10px;}'
  ]
})
export class HomeComponent {

}
