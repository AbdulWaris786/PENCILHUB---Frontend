import { NgModule } from "@angular/core";
import { MainPageComponent } from "./components/mainPage/mainpage.component";
import { LayerOneComponent } from "./components/layerOne/layerone.component";
import { CommonModule } from "@angular/common";
import { SliderComponent } from "./components/sliderComponent/slider.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        MainPageComponent,
        SliderComponent,
        LayerOneComponent,
    ],
    imports:[
        CommonModule,
        SharedModule
    ],
    exports:[
        MainPageComponent,
        SliderComponent,
        LayerOneComponent,
    ]
})

export class HomeModule { }