import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SharedModule } from 'src/app/core/shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutMeComponent
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
