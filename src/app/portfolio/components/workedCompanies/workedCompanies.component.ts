import { ChangeDetectorRef, Component } from "@angular/core";
import { fadeIn, slideInLeft } from "src/app/shared/animation";

@Component({
    selector : "app-worked-companies",
    templateUrl : "./workedCompanies.component.html",
    animations : [
        slideInLeft, fadeIn
    ]
})
export class WorkedCompaniesComponent {
    constructor(private cdr: ChangeDetectorRef) {}

    slideInBottomText = false
    slideLeftAnimation = false

    onSliderInView() {
        this.slideInBottomText = true
        this.slideLeftAnimation = true
        this.cdr.detectChanges()
    }
}
