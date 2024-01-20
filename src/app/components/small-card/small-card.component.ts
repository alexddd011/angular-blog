import { Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  template: `
    <div class="container__small__card">
      <div class="small-card__photo">
        <img 
          src="../../../assets/img/placeholder.png" 
          alt=""
        >
      </div>
      <a href="">
        <div class="small-card__title">
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>

        <div class="small-card__description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, odio!</p>
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

}
