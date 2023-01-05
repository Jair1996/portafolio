import { Component } from '@angular/core';
import { skills } from 'src/app/core/data';
import { Skill } from 'src/app/core/interfaces';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent {
  skills: Array<Skill> = skills;
}
