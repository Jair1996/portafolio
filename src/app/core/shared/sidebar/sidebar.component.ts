import { Component } from '@angular/core';
import { socialNetworks } from '../../data';
import { SocialNetwork } from '../../interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  socialNetworks: Array<SocialNetwork> = socialNetworks;
  sidebarActivate: boolean = false;

  toogleMenu() {
    this.sidebarActivate = !this.sidebarActivate;
  }
}
