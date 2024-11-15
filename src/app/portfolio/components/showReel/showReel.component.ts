import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { BackendService } from "src/app/services/backend.service";
import { fadeIn, slideInLeft } from "src/app/shared/animation";

@Component({
    selector : "app-show-reel",
    templateUrl : "./showReel.component.html",
    animations : [
        slideInLeft, fadeIn
    ]
})
export class ShowReelComponent {
    headingInView = false
    contentInView = false

    constructor(private cdr: ChangeDetectorRef, private backendService: BackendService,private sanitizer: DomSanitizer) {}

    @ViewChild("videoPlayer") videoPlayer!: ElementRef<HTMLVideoElement>;

    ngAfterViewInit(): void {
        const videoElement = this.videoPlayer.nativeElement

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoElement.play()
                } else {
                    videoElement.pause()
                }
            })
            },
            { threshold : 0.3 }
        )
        observer.observe(videoElement)
    }

    onHeadingInView(): void {
        this.headingInView = true
        this.cdr.detectChanges()
    }

    onContentInView(): void {
        this.contentInView = true;
        this.cdr.detectChanges(); // Trigger change detection
    }
    
}