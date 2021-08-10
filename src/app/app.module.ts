import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './component/navi/navi.component';
import { MenuComponent } from './component/menu/menu.component';
import { CarDetailComponent } from './component/car-detail/car-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandComponent } from './component/brand/brand.component';
import { ColorComponent } from './component/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    MenuComponent,
    CarDetailComponent,
    BrandComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
