import { Component, OnInit } from '@angular/core';
import { DataCard } from 'src/app/interface/data-card';

@Component({
  selector: 'app-home',
  template: `
    
    
    <app-menu-title/>
    <article>
      <div class="articles__main">
        <app-big-card [DataCard]="bigDataCard"/>
      </div>
      <div class="articles__others">
        <div *ngFor="let data of SmallDataCard">
          <app-small-card [smallDataCard]="data"/>
        </div>
        
      </div>
    </article>
  `,
  styles: [
    'article{display:flex;justify-content:center;margin-top:10px;}'
  ]
})
export class HomeComponent implements OnInit{

  bigDataCard!:DataCard
  SmallDataCard:DataCard[] = [
    {
      photo:"https://picsum.photos/200/300?random=0",
      title:"Imagem 1",
      description:"Lorem 1 ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, odio!"
    },
    {
      photo:"https://picsum.photos/200/300?random=1",
      title:"Imagem 2",
      description:"Lorem 2 ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, odio!"
    },
    {
      photo:"https://picsum.photos/200/300?random=2",
      title:"Imagem 3",
      description:"Lorem 3 ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, odio!"
    },
    {
      photo:"https://picsum.photos/200/300?random=3",
      title:"Imagem 4",
      description:"Lorem 4 ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, odio!"
    }
    
  ]

  ngOnInit(): void {
    this.bigDataCard = this.SmallDataCard[0]
    this.SmallDataCard.shift();
    this.trocarImg()
  }

  trocarImg(){
    setInterval(()=>{
      this.SmallDataCard.push(this.bigDataCard)
      this.bigDataCard = this.SmallDataCard[0]
      this.SmallDataCard.shift();
    }, 3000)
  }
}
