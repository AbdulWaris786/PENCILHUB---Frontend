import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-my-skills',
    templateUrl: './mySkills.component.html',
})
export class MySkills {
    @Input() page: boolean = true
}