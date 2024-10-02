import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { fadeIn, slideInLeft } from "../../animation";
import { BackendService } from "src/app/services/backend.service";
import { response } from "express";

@Component({
    selector : "app-livesub",
    templateUrl : "./livesub.component.html",
    animations : [
        fadeIn, slideInLeft,
    ]
})
export class LiveSubsComponent implements OnInit {
    slideAnimation = false
    fadeAnimation = false
    subscriberCount = 0
    finalSubscribersCount = 29516
    animationState = 'initial'
    @Input() page: string = ""
    @Input() totalVideos = 0
    @Input() totalViews = ""

    constructor(private cdr: ChangeDetectorRef, private backendService: BackendService) {}

    ngOnInit(): void {
        // this.backendService.getSubscribers().subscribe({
        //     next : (response: any)=>{
        //         this.finalSubscribersCount = response.subscriberCount
        //     },
        //     error : (rsponse: any)=>{
        //         window.location.reload()
        //     },
        // })
    }

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