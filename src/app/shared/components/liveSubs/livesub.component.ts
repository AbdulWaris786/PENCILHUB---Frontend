import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { fadeIn, slideInLeft } from "../../animation";
import { BackendService } from "src/app/services/backend.service";

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
    finalSubscribersCount: number = 20000
    formattedSubscribersCount: string = "0";
    animationState = 'initial'
    profileImg = "assets/images/mainpage/new profile.png"
    @Input() page = ""
    totalVideos = 250
    totalViews = "2.5M"

    constructor(private cdr: ChangeDetectorRef, private backendService: BackendService) {}

    ngOnInit(): void {
        this.backendService.getSubscribers().subscribe({
            next : (response: any)=>{
                this.totalViews = this.formatSubscriberCount(response.items[0].statistics.viewCount)
                this.totalVideos = response.items[0].statistics.videoCount
                this.finalSubscribersCount = parseInt(response.items[0].statistics.subscriberCount, 10); // Raw number
                this.formattedSubscribersCount = this.formatSubscriberCount(this.finalSubscribersCount);            },
            error : (response: any)=>{                
                // window.location.reload()
            },
        })
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
        const duration = 1000
        const frameDuration = 1000 / 60
        const totalFrames = Math.round(duration / frameDuration)
        const increment = this.finalSubscribersCount / totalFrames

        let frame = 0
        const counter = setInterval(() => {
            frame++
            this.subscriberCount = Math.round(this.subscriberCount + increment)
            this.formattedSubscribersCount = this.formatSubscriberCount(this.subscriberCount);
            this.cdr.detectChanges()
            
            if ( frame === totalFrames ) {
                clearInterval(counter)
                this.subscriberCount = this.finalSubscribersCount
                this.formattedSubscribersCount = this.formatSubscriberCount(this.finalSubscribersCount);
            }

        }, frameDuration);
    }

    formatSubscriberCount(count: number) {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'; 
        }
        if (count >= 1000) {
            return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return count.toString();
    }
}