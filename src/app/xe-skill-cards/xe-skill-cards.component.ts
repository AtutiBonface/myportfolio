import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xe-skill-cards',
  standalone: true,
  imports: [],
  templateUrl: './xe-skill-cards.component.html',
  styleUrl: './xe-skill-cards.component.scss'
})
export class XeSkillCardsComponent {

  @Input() name: any;
  @Input() logo: any;


}
