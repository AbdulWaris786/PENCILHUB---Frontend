import { NgModule } from "@angular/core";
import { MainPagePortfolio } from "./components/mainPage/mainpage.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import { HomeModule } from "../home/home.module";
import { RecentWorksComponent } from "./components/recentWorks/recentworks.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        MainPagePortfolio,
        RecentWorksComponent
    ],
    imports: [
        HomeModule,
        SharedModule
    ],
    exports: [
        MainPagePortfolio
    ]
})
export class PortfolioModule {}