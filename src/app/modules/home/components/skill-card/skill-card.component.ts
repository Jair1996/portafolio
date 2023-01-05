import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/core/interfaces';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {
  @Input() skill!: Skill;
}
