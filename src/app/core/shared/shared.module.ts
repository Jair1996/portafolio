import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { IconComponent } from './icon/icon.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ChipComponent } from './chip/chip.component';
import { DividerComponent } from './divider/divider.component';
import { InformationCardListComponent } from './card/information-card-list/information-card-list.component';
import { InformationCardComponent } from './card/information-card/information-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    IconButtonComponent,
    IconComponent,
    AvatarComponent,
    ChipComponent,
    DividerComponent,
    InformationCardListComponent,
    InformationCardComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
