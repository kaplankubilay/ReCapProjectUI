import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './component/brand/brand.component';
import { CarComponent } from './component/car/car.component';
import { ColorComponent } from './component/color/color.component';
import { MenuComponent } from './component/menu/menu.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:MenuComponent},
  {path:"cars/getcardetailsdto",component:CarComponent},
  {path:"colors/getallcolors",component:ColorComponent},
  {path:"brands/getallbrands",component:BrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
