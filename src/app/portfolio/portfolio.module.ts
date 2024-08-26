import { NgModule } from "@angular/core";
import { MainPagePortfolio } from "./components/mainPage/mainpage.component";
import { HeaderComponent } from "../home/components/header/header.component";
import { HomeModule } from "../home/home.module";
import { RecentWorksComponent } from "./components/recentWorks/recentworks.component";

@NgModule({
    declarations: [
        MainPagePortfolio,
        RecentWorksComponent
    ],
    imports: [
        HomeModule
    ],
    exports: [
        MainPagePortfolio
    ]
})
export class PortfolioModule {}