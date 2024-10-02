import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { BackendService } from "src/app/services/backend.service";
import { fadeIn, slideInLeft } from "src/app/shared/animation";

@Component({
    selector : "app-show-reel",
    templateUrl : "./showReel.component.html",
    animations : [
        slideInLeft, fadeIn
    ]
})
export class ShowReelComponent implements OnInit, AfterViewInit {
    headingInView = false
    contentInView = false
    reel: any = "assets/images/works/Ae transition 1tumb .png"

    constructor(private cdr: ChangeDetectorRef, private backendService: BackendService) {}

    ngOnInit(): void {
        // this.backendService.getShowReel().subscribe({
        //     next: (response: any) => {
        //         this.reel = response.reel
        //     },
        //     error: (respose: any) => {
        //         console.log("failed");
                
        //     }
        // })
    }

    ngAfterViewInit(): void {}

    onHeadingInView(): void {
        this.headingInView = true
        this.cdr.detectChanges()
    }

    onContentInView(): void {
        this.contentInView = true;
        this.cdr.detectChanges(); // Trigger change detection
    }
    
}