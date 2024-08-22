import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyPage } from './layerOne/layerone.conponent';
import { SliderComponent } from './sliderComponent/slider.component';
import { ConatactUsComponent } from './contactUs/contactUs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyPage,
    SliderComponent,
    ConatactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
