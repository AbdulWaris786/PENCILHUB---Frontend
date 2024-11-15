import { AfterViewInit, Component, HostListener, OnInit, ElementRef, ViewChildren, QueryList, Input, ViewChild } from "@angular/core";
import { gsap } from 'gsap';
import { BackendService } from "src/app/services/backend.service";

@Component({
    selector: "recent-works-component",
    templateUrl: "./recentworks.component.html",
})
export class RecentWorksComponent implements OnInit, AfterViewInit {
    contents: Array<any> = [];
    visibleContents: Array<string> = [];

    constructor(private backendService: BackendService) {}

    @ViewChild("heading") heading!: ElementRef;
    @ViewChildren('contentElement') contentElements!: QueryList<ElementRef>;

    ngOnInit(): void {
        this.backendService.getRecentWorks().subscribe({
            next: (response: any) => {
                const validVideoIds = response.items.filter((video: any) => video.id && video.id.videoId);

                if (validVideoIds.length) {
                    const videoIds = validVideoIds.map((video: any) => video.id.videoId);
                    this.backendService.getVideoDetails(videoIds).subscribe({
                        next: (detailsResponse: any[]) => {
                            const allVideos = detailsResponse.map(response => response.items).flat();

                            this.contents = allVideos.filter((video: any) => {
                                const duration = video.contentDetails.duration;
                                return duration.includes("M") || duration.includes("H");
                            }).slice(0, 6);

                            if (this.contents.length > 1) {
                                this.updateVisibleContents(window.innerWidth);
                            }
                        },
                        error: (error: any) => {
                            console.error("Error fetching video details:", error);
                        }
                    });
                }
            },
            error: (response: any) => {
                console.log("failed", response.error);
            }
        });
    }

    ngAfterViewInit(): void {
        this.animateHeading();
        this.animateContents();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        const target = event.target as Window;
        this.updateVisibleContents(target.innerWidth);
    }

    private updateVisibleContents(screenWidth: number): void {
        if (screenWidth < 640) {
            this.visibleContents = this.contents.map((video: any) => video.id).slice(0, 4); 
        } else {
            this.visibleContents = this.contents.map((video: any) => video.id).slice(0, 6); 
        }
    }

    private animateContents(): void {
        this.contentElements.forEach((content: ElementRef) => {
            this.animateEnter(content.nativeElement);
        });
    }

    animateEnter(element: HTMLElement) {
        gsap.from(element, {
            opacity: 0,
            scale: 0.95,
            duration: 2,
            ease: "power4.inOut",
            stagger: 0.5
        });
    }

    animateHeading(): void {
        gsap.from(this.heading.nativeElement, {
            x: -30,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power3.out"
        });
    }
}
