import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { fadeIn, slideInLeft } from "../../animation";

@Component({
    selector : "app-livesub",
    templateUrl : "./livesub.component.html",
    animations : [
        fadeIn, slideInLeft,
    ]
})
export class LiveSubsComponent {
    slideAnimation = false
    fadeAnimation = false
    subscriberCount = 0
    finalSubscribersCount = 29516
    animationState = 'initial'
    @Input() page: string = ""
    @Input() totalVideos = 0
    @Input() totalViews = ""

    constructor(private cdr: ChangeDetectorRef) {}

    onSliderInView() {
        this.slideAnimation = true
        this.cdr.detectChanges()
    }
    
    onFadeInInView() {
        this.fadeAnimation = true
        this.cdr.detectChanges()
        this.animateCountUp();
    }

    animateCountUp() {
        const duration = 2000
        const frameDuration = 1000 / 60
        const totalFrames = Math.round(duration / frameDuration)
        const increment = this.finalSubscribersCount / totalFrames

        let frame = 0
        const counter = setInterval(() => {
            frame++
            this.subscriberCount = Math.round(this.subscriberCount + increment)
            
            if ( frame === totalFrames ) {
                clearInterval(counter)
                this.subscriberCount = this.finalSubscribersCount
            }

        }, frameDuration);
    }
}