import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  template: `
    <div class="container__big__card">
      <div class="bid-card__photo">
        <img 
          src="../../../assets/img/placeholder.png" 
          alt=""
        >
      </div>
      <a href="">
        <div class="bid-card__title">
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>

        <div class="bid-card__description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, odio!</p>
        </div>
      </a>
      

    </div>
  `,
  styles: [
    '.container__big__card{margin:0 20px;width:400px;height:400px;display:flex;justify-content:flex-start;flex-direction:column;}',
    '.container__big__card > .bid-card__photo{width:100%;position:relative;height:250px;}',
    '.container__big__card > .bid-card__photo > img{width:100%;height:100%;position:absolute;}',
    '.container__big__card > a > .bid-card__title > h1{font-size:22px;margin:10px 0;color:var(--white);}',
    '.container__big__card > a > .bid-card__description > p{color:grey;}'
  ]
})
export class BigCardComponent {

}
