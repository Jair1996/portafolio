import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';



@NgModule({
  declarations: [
    PortfolioPageComponent
  ],
  exports: [
    PortfolioPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortafolioModule { }
