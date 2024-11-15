import { Component } from "@angular/core";
import { BackendService } from "src/app/services/backend.service";

@Component({
    selector : "app-portfolio-page",
    templateUrl : "./mainpage.component.html"
})
export class MainPagePortfolio {
    totalVideos: number = 245
    views: string = "3.6 million"
} 