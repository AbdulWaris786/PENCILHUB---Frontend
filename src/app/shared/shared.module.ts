import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { ConatactUsComponent } from "./components/contactUs/contactUs.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        HeaderComponent,
        ConatactUsComponent
    ],
    exports:[
        HeaderComponent,
        ConatactUsComponent
    ],
    imports:[
        BrowserModule,
        RouterModule
    ]
})

export class SharedModule{ }