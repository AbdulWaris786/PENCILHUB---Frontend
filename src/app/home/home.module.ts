import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { MainPageComponent } from "./components/mainPage/mainpage.component";
import { LayerOneComponent } from "./components/layerOne/layerone.conponent";
import { CommonModule } from "@angular/common";
import { SliderComponent } from "./components/sliderComponent/slider.component";

@NgModule({
    declarations:[
        HeaderComponent,
        MainPageComponent,
        SliderComponent,
        LayerOneComponent

    ],
    imports:[
        CommonModule
    ],
    exports:[
        HeaderComponent,
        MainPageComponent,
        SliderComponent,
        LayerOneComponent
    ]
})

export class HomeModule { }