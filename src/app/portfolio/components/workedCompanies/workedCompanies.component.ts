import { ChangeDetectorRef, Component, HostListener, OnInit } from "@angular/core";
import { BackendService } from "src/app/services/backend.service";
import { fadeIn, slideInLeft } from "src/app/shared/animation";

@Component({
    selector : "app-worked-companies",
    templateUrl : "./workedCompanies.component.html",
    styleUrls : ["./workedCompanies.component.css"],
    animations : [
        slideInLeft, fadeIn
    ]
})
export class WorkedCompaniesComponent {
    constructor(private cdr: ChangeDetectorRef, private backendService: BackendService) {}

    slideInBottomText = false
    slideLeftAnimation = false
    companies: string[] = ["assets/images/works/WhatsApp Image 2024-11-15 at 22.12.44_0c5fe116.jpg", "assets/images/works/WhatsApp Image 2024-11-15 at 22.12.44_0c5fe116.jpg", "assets/images/works/WhatsApp Image 2024-11-15 at 22.12.44_0c5fe116.jpg"]

    onSliderInView() {
        this.slideInBottomText = true
        this.slideLeftAnimation = true
        this.cdr.detectChanges()
    }

    ngAfterViewInit() {
        this.checkScreenSizeAndSlide();
    }

    ngOnDestroy() {
        if (this.intervalId) clearInterval(this.intervalId);
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        clearInterval(this.intervalId);
        this.checkScreenSizeAndSlide();
    }

    checkScreenSizeAndSlide() {
        const isMobileOrTablet = window.innerWidth < 1024;

        if (isMobileOrTablet) {
            this.startAutoSlide();
        } else {
            clearInterval(this.intervalId);
        }
    }

    intervalId: any
    slideLeft = false
    startAutoSlide() {
        this.intervalId = setInterval(() => {
            this.next();
        }, 3000); // Auto-slide every 3 seconds
    }

    next() {
        this.resetAnimations();
        this.slideLeft = true;
        clearInterval(this.intervalId)
        this.startAutoSlide();
        setTimeout(() => {
            this.rotateRight();
        }, 500); // Duration of the slide animation
    }

    rotateRight() {
        const first = this.companies.shift();
        if (first) this.companies.push(first);
        this.resetAnimations();
    }

    resetAnimations() {
        this.slideLeft = false
    }
}
