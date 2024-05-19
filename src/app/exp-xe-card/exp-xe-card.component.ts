import { Component, Input } from '@angular/core';
import { ContainerIntersectionDirective } from '../directives/container-intersection.directive';

@Component({
  selector: 'app-exp-xe-card',
  standalone: true,
  imports: [
    ContainerIntersectionDirective,
  ],
  templateUrl: './exp-xe-card.component.html',
  styleUrl: './exp-xe-card.component.scss'
})
export class ExpXeCardComponent {


  @Input() title1 :any;
  @Input() title2 :any;
  @Input() subTitle1 :any;
  @Input() subTitle2 :any;
  @Input() year :any;


}
