import { Component, Input } from '@angular/core';
import { ContactInformation } from 'src/app/core/interfaces';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})
export class InformationCardComponent {
  @Input() data!: ContactInformation;
}
