import { Component, Input } from "@angular/core";

@Component({
    selector : "contact-us-component",
    templateUrl : "./contactUs.component.html"
})
export class ConatactUsComponent {
    @Input() info: string = ""
}