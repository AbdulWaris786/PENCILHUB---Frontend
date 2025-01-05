import { NgModule } from "@angular/core";
import { MainPagePortfolio } from "./components/mainPage/mainpage.component";
import { HomeModule } from "../home/home.module";
import { RecentWorksComponent } from "./components/recentWorks/recentworks.component";
import { SharedModule } from "../shared/shared.module";
import { WorkedCompaniesComponent } from "./components/workedCompanies/workedCompanies.component";
import { ShowReelComponent } from "./components/showReel/showReel.component";
import { CommonModule } from "@angular/common";
import { BannerComponent } from "./components/banner/banner.component";
import { AboutMe } from "./components/about-me/aboutMe.component";
import { PosterWorks } from "./components/poster-work/poster.component";

@NgModule({
    declarations: [
        MainPagePortfolio,
        RecentWorksComponent,
        WorkedCompaniesComponent,
        ShowReelComponent,  
        BannerComponent,
        AboutMe,
        PosterWorks
    ],
    imports: [
        HomeModule,
        SharedModule,
        CommonModule,
        SharedModule,
    ],
    exports: [
        MainPagePortfolio
    ]
})
export class PortfolioModule {}