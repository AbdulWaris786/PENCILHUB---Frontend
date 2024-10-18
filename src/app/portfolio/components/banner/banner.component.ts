import { ChangeDetectorRef, Component } from "@angular/core";
import { fadeIn, fadeInIMG, slideInLeft } from "src/app/shared/animation";

@Component({
    selector : "app-banner",
    templateUrl : "./banner.component.html",
    animations : [
        fadeIn, slideInLeft, fadeInIMG
    ]
})
export class BannerComponent {
    slideInView: boolean = false
    fadeInView: boolean = false
    bannerImg = "assets/images/mainpage/my-photo-protfolio.png"
    constructor(private cdr: ChangeDetectorRef) {}

    onFadeIn() {
        this.fadeInView = true
        this.cdr.detectChanges()
    }

    onSlideIn() {
        this.slideInView = true
        this.cdr.detectChanges()
    }
}