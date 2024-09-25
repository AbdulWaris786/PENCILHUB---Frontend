import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { fadeIn, slideInLeft } from "src/app/shared/animation";

@Component({
    selector : "app-show-reel",
    templateUrl : "./showReel.component.html",
    animations : [
        slideInLeft, fadeIn
    ]
})
export class ShowReelComponent implements AfterViewInit {
    headingInView = false
    contentInView = false

    constructor(private cdr: ChangeDetectorRef) {}

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