import { Component, Input } from '@angular/core';
import { DataCard } from 'src/app/interface/data-card';

@Component({
  selector: 'app-small-card',
  template: `
    <div class="container__small__card">
      <div class="small-card__photo">
        <img 
          src="{{smallDataCard.photo}}" 
          alt=""
        >
      </div>
      <a href="">
        <div class="small-card__title">
          <h1>{{smallDataCard.title}}</h1>
        </div>

        <div class="small-card__description">
          <p>{{smallDataCard.description}}</p>
        </div>
      </a>
    </div>
  `,
  styles: [
    '.container__small__card{border-bottom:1px solid var(--white);padding-bottom:10px;width:550px; display:flex;flex-direction:row;margin-bottom:10px;}',
    '.small-card__photo > img{width:200px;height:100px;margin-right:10px;}'
  ]
})
export class SmallCardComponent {
  @Input() smallDataCard!:DataCard
}
