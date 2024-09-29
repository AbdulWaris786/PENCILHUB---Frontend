import { AfterViewInit, Component, HostListener, OnInit, ElementRef, ViewChildren, QueryList, AfterViewChecked, ChangeDetectorRef, ViewChild } from "@angular/core";
import { gsap } from 'gsap';

@Component({
    selector : "recent-works-component",
    templateUrl : "./recentworks.component.html"
})
export class RecentWorksComponent implements OnInit, AfterViewInit {
    contents: Array<string> = ["assets/images/works/Ae transition 1tumb .png", "assets/images/works/EP10.png", "assets/images/works/ep12cc.png", "assets/images/works/EP7.png", "assets/images/works/video-editing-pc-&laptop-tumb.png", "assets/images/works/video-editing-pc-&laptop-tumb.png"]
    visibleContents: Array<string> = []

    @ViewChild("heading") heading!: ElementRef
    @ViewChildren('contentElement') contentElements!: QueryList<ElementRef>;

    ngOnInit(): void {
        this.updateVisibleContents(window.innerWidth);
    }

    ngAfterViewInit(): void {
        // Ensure the view is fully rendered before applying animations
        this.animateHeading()
        this.animateContents();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        const target = event.target as Window;
        this.updateVisibleContents(target.innerWidth);
    }

    private updateVisibleContents(screenWidth: number): void {
        if (screenWidth < 640) {
            // Small screen (Mobile)
            this.visibleContents = this.contents.slice(0, 4); // Show 4 items
        } else {
            // Large screen (Desktop or bigger)
            this.visibleContents = this.contents; // Show all 6 items
        }
    }

    // Animate the visible contents after updating them
    private animateContents(): void {
        this.contentElements.forEach((content: ElementRef) => {
            this.animateEnter(content.nativeElement);
        });
    }

    animateEnter(element: HTMLElement) {
        gsap.from(element, {
            opacity : 0,
            scale : .95,
            duration : 2,
            ease : "power4.inOut",
            stagger: 0.5
        })
    }

    animateHeading(): void {
        gsap.from(this.heading.nativeElement, {
            x : -30,
            opacity : 0,
            duration : 1,
            delay : .5,
            ease : "power3.out"
        })
    }
}