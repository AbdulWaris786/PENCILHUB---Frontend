import { NgModule } from "@angular/core";
import { MainPagePortfolio } from "./components/mainPage/mainpage.component";
import { HomeModule } from "../home/home.module";
import { RecentWorksComponent } from "./components/recentWorks/recentworks.component";
import { SharedModule } from "../shared/shared.module";
import { WorkedCompaniesComponent } from "./components/workedCompanies/workedCompanies.component";
import { ShowReelComponent } from "./components/showReel/showReel.component";
import { CommonModule } from "@angular/common";
import { inViewDirective } from "../shared/in-view.directive";

@NgModule({
    declarations: [
        MainPagePortfolio,
        RecentWorksComponent,
        WorkedCompaniesComponent,
        ShowReelComponent,
        inViewDirective
    ],
    imports: [
        HomeModule,
        SharedModule,
        CommonModule,
        
    ],
    exports: [
        MainPagePortfolio
    ]
})
export class PortfolioModule {}