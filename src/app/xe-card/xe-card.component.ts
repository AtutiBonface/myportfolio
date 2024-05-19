import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xe-card',
  standalone: true,
  imports: [],
  templateUrl: './xe-card.component.html',
  styleUrl: './xe-card.component.scss'
})
export class XeCardComponent {
  @Input() title: any;
  @Input() description: any;
  @Input() image: any;

  @Input() moreDescription1: any;
  @Input() moreDescription2: any;

  see : boolean = false


  seeMore(){
    this.see = ! this.see
    console.log('opened')
  }


}
