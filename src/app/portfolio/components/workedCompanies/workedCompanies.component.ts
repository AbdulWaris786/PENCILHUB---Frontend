import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { BackendService } from "src/app/services/backend.service";
import { fadeIn, slideInLeft } from "src/app/shared/animation";

@Component({
    selector : "app-worked-companies",
    templateUrl : "./workedCompanies.component.html",
    styleUrls : ["./workedCompanies.component.css"],
    animations : [
        slideInLeft, fadeIn
    ]
})
export class WorkedCompaniesComponent implements OnInit {
    constructor(private cdr: ChangeDetectorRef, private backendService: BackendService) {}

    slideInBottomText = false
    slideLeftAnimation = false
    companies: string[] = ["/assets/images/works/video-editing-pc-&laptop-tumb.png", "assets/images/works/ep12cc.png", "assets/images/works/video-editing-pc-&laptop-tumb.png"]

    ngOnInit(): void {
        // this.backendService.getRecentCompanies().subscribe({
        //     next: (response: any) => {
        //         this.companies = response.companies
        //     },
        //     error: (respose: any) => {
        //         console.log("failed");
                
        //     }
        // })
    }

    onSliderInView() {
        this.slideInBottomText = true
        this.slideLeftAnimation = true
        this.cdr.detectChanges()
    }
}
