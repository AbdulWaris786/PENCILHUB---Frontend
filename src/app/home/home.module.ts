import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { Layeronecomponent } from "./components/layerOne/layerone.conponent";
import { MainPageComponent } from "./components/mainPage/mainpage.component";

@NgModule({
    declarations:[
        HeaderComponent,
        Layeronecomponent,
        MainPageComponent   
    ],
    imports:[
        
    ],
    exports:[
        HeaderComponent,
        Layeronecomponent,
        MainPageComponent
    ]
})

export class HomeModule { }