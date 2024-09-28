import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { ConatactUsComponent } from "./components/contactUs/contactUs.component";
import { RouterModule } from "@angular/router";
import { inViewDirective } from "./in-view.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        HeaderComponent,
        ConatactUsComponent,
        inViewDirective
    ],
    exports:[
        HeaderComponent,
        ConatactUsComponent,
        inViewDirective
    ],
    imports:[
        CommonModule,
        RouterModule,
    ]
})
 
export class SharedModule{ }