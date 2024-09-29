import { ChangeDetectorRef, Component, Input } from "@angular/core";
import { fadeIn, slideInBottom, slideInLeft } from "../../animation";

@Component({
    selector : "contact-us-component",
    templateUrl : "./contactUs.component.html",
    animations : [
        slideInBottom, slideInLeft, fadeIn
    ]
})
export class ConatactUsComponent {
    constructor(private cdr: ChangeDetectorRef) {}
    @Input() info: string = ""

    slideInBottomText = false
    slideLeftAnimation = false
    fadeIn = false

    onSliderInView() {
        this.slideInBottomText = true
        this.cdr.detectChanges()
    }
    onHeadInView() {
        this.slideLeftAnimation = true
        this.cdr.detectChanges()
    }
    onFadeInInView() {
        this.fadeIn = true
        this.cdr.detectChanges()
    }
}