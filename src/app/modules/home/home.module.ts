import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutMeComponent,
    SkillsComponent,
    SkillsListComponent,
    SkillCardComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
