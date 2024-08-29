import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './home/components/mainPage/mainpage.component';
import { MainPagePortfolio } from './portfolio/components/mainPage/mainpage.component';

const routes: Routes = [
  {
    path:'',
    component:MainPageComponent
  },
  {
    path:'portfolio',
    component:MainPagePortfolio
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
