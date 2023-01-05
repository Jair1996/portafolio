import { Component, Input } from '@angular/core';
import { Project } from 'src/app/core/interfaces';

@Component({
  selector: 'app-projec-card',
  templateUrl: './projec-card.component.html',
  styleUrls: ['./projec-card.component.scss']
})
export class ProjecCardComponent {
  @Input() project!: Project;
}
