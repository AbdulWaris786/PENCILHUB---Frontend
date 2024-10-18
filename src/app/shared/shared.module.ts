import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { ConatactUsComponent } from "./components/contactUs/contactUs.component";
import { RouterModule } from "@angular/router";
import { inViewDirective } from "./in-view.directive";
import { CommonModule } from "@angular/common";
import { LiveSubsComponent } from "./components/liveSubs/livesub.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
    declarations:[
        HeaderComponent,
        ConatactUsComponent,
        LiveSubsComponent,
        FooterComponent,
        inViewDirective
    ],
    exports:[
        HeaderComponent,
        ConatactUsComponent,
        LiveSubsComponent,
        FooterComponent,
        inViewDirective
    ],
    imports:[
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
 
export class SharedModule{ }