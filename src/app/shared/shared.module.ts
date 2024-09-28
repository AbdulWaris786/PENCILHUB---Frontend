import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { ConatactUsComponent } from "./components/contactUs/contactUs.component";
import { RouterModule } from "@angular/router";
import { inViewDirective } from "./in-view.directive";
import { CommonModule } from "@angular/common";
import { LiveSubsComponent } from "./components/liveSubs/livesub.component";

@NgModule({
    declarations:[
        HeaderComponent,
        ConatactUsComponent,
        LiveSubsComponent,
        inViewDirective
    ],
    exports:[
        HeaderComponent,
        ConatactUsComponent,
        LiveSubsComponent,
        inViewDirective
    ],
    imports:[
        CommonModule,
        RouterModule,
    ]
})
 
export class SharedModule{ }