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

    @Input() contentType: string = ""
    
    onSliderInView() {
        this.slideInBottomText = true
        this.cdr.detectChanges()
    }
    onHeadInView() {
        this.slideLeftAnimation = true
        this.cdr.detectChanges()
    }
    onFadeInInView() {
        this.fadeIn = true
        this.cdr.detectChanges()
    }

    posts = [
        {  num: 1, title: "assets/images/Adobe_Photoshop_Lightroom_.png" },
        {  num: 2, title: "assets/images/adobe-photoshop.png" },
        {  num: 3, title: "assets/images/adobe-premiere-pro-.png" },
        {  num: 4, title: "assets/images/Adobe_Audition.png" },
        {  num: 5, title: "assets/images/Layer-21.png" },
    ];
    
    slideLeft = false;
    slideRight = false;
    intervalId: any;

    ngOnInit() {
        if (this.posts.length % 2 === 0) {
            this.posts.pop()
        }
        this.centerFirstItem();
        this.startAutoSlide();
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