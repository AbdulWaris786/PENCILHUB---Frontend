import { ChangeDetectorRef, Component } from "@angular/core";
import { slideInBottom, slideInLeft } from "src/app/shared/animation";

@Component({
    selector : "app-worked-companies",
    templateUrl : "./workedCompanies.component.html",
    animations : [
        slideInLeft, slideInBottom
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
