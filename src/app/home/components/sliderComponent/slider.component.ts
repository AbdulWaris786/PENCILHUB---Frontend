import { ChangeDetectorRef, Component, Input } from "@angular/core";
import { fadeIn, slideInBottom, slideInLeft } from "src/app/shared/animation";

@Component({
    selector : "slider-component",
    templateUrl : "./slider.component.html",
    styleUrls : ["./slider.component.css"],
    animations : [
        slideInBottom, slideInLeft, fadeIn
    ]
})
export class SliderComponent {
    constructor(private cdr: ChangeDetectorRef) {}
  
    slideInBottomText = false
    slideLeftAnimation = false
    fadeIn = false
    @Input() delay: number = 2000

    @Input() contentType: string = ""
    @Input() posts: any[] = [];
    
    onSliderInView() {
        this.slideInBottomText = true
        this.cdr.detectChanges()
        this.startAutoSlide();
    }
    onHeadInView() {
        this.slideLeftAnimation = true
        this.cdr.detectChanges()
    }
    onFadeInInView() {
        this.fadeIn = true
        this.cdr.detectChanges()
    }
    
    slideLeft = false;
    slideRight = false;
    intervalId: any;

    ngOnInit() {
        if (this.posts.length % 2 === 0) {
            this.posts.pop()
        }
        this.centerFirstItem();
    }
  
    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    centerFirstItem() {
        const centerIntex = (this.posts.length / 2) - 0.5 ;
        this.posts = this.posts.splice(-centerIntex).concat(this.posts);
    }
  
    startAutoSlide() {
        this.intervalId = setInterval(() => {
            this.next();
        }, this.delay); // Auto-slide every 3 seconds
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
  
    previous() {
        this.resetAnimations();
        this.slideRight = true;
        clearInterval(this.intervalId)
        this.startAutoSlide();
        setTimeout(() => {
            this.rotateLeft();
        }, 500); // Duration of the slide animation
    }
  
    rotateRight() {
        const first = this.posts.shift();
        if (first) this.posts.push(first);
        this.resetAnimations();
    }
  
    rotateLeft() {
        const last = this.posts.pop();
        if (last) this.posts.unshift(last);
        this.resetAnimations();
    }
  
    resetAnimations() {
        this.slideLeft = false;
        this.slideRight = false;
    }
}