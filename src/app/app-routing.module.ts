import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './component/brand/brand.component';
import { CarComponent } from './component/car/car.component';
import { ColorComponent } from './component/color/color.component';
import { CustomerComponent } from './component/customer/customer.component';
import { MainPageComponent } from './component/mainPage/mainPage.component';
import { MenuComponent } from './component/menu/menu.component';
import { RentalComponent } from './component/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:MainPageComponent},
  {path:"cars/getcardetailsdto",component:CarComponent},
  {path:"cars/getcarsbybrandId/:brandId",component:CarComponent},
  {path:"cars/getcarsbycolorId/:colorId",component:CarComponent},
  {path:"colors/getallcolors",component:ColorComponent},
  {path:"brands/getallbrands",component:BrandComponent},
  {path:"customers/getcustomerdetailsdto",component:CustomerComponent},
  {path:"rentals/getrentaldetaildto",component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
