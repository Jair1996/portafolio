import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './modules/home/home.module';

import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { PortfolioPageComponent } from './modules/portafolio/pages/portfolio-page/portfolio-page.component';
import { PortafolioModule } from './modules/portafolio/portafolio.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'portafolio',
    component: PortfolioPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule, PortafolioModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
