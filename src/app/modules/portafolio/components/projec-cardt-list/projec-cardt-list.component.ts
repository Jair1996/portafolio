import { Component } from '@angular/core';
import { projects } from 'src/app/core/data';
import { Project } from 'src/app/core/interfaces';

@Component({
  selector: 'app-projec-cardt-list',
  templateUrl: './projec-cardt-list.component.html',
  styleUrls: ['./projec-cardt-list.component.scss']
})
export class ProjecCardtListComponent {
  projects: Array<Project> = projects;
}
