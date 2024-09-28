import { NgModule } from "@angular/core";
import { MainPagePortfolio } from "./components/mainPage/mainpage.component";
import { HomeModule } from "../home/home.module";
import { RecentWorksComponent } from "./components/recentWorks/recentworks.component";
import { SharedModule } from "../shared/shared.module";
import { WorkedCompaniesComponent } from "./components/workedCompanies/workedCompanies.component";
import { ShowReelComponent } from "./components/showReel/showReel.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        MainPagePortfolio,
        RecentWorksComponent,
        WorkedCompaniesComponent,
        ShowReelComponent,  
    ],
    imports: [
        HomeModule,
        SharedModule,
        CommonModule,
        SharedModule
    ],
    exports: [
        MainPagePortfolio
    ]
})
export class PortfolioModule {}