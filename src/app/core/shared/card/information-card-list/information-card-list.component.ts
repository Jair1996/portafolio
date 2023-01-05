import { Component } from '@angular/core';
import { contactInformation } from 'src/app/core/data';
import { ContactInformation } from 'src/app/core/interfaces';

@Component({
  selector: 'app-information-card-list',
  templateUrl: './information-card-list.component.html',
  styleUrls: ['./information-card-list.component.scss']
})
export class InformationCardListComponent {
  contactInformation: Array<ContactInformation> = contactInformation
}
