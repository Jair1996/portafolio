import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjecCardtListComponent } from './components/projec-cardt-list/projec-cardt-list.component';
import { ProjecCardComponent } from './components/projec-card/projec-card.component';



@NgModule({
  declarations: [
    PortfolioPageComponent,
    ProjectListComponent,
    ProjecCardtListComponent,
    ProjecCardComponent
  ],
  exports: [
    PortfolioPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PortafolioModule { }
