import { ChangeDetectorRef, Component, Renderer2 } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Router } from "@angular/router";
import { fadeIn, slideInLeft } from "../../animation";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css'],
    animations: [
        trigger("slideLeft", [
            state("hidden", style({
                opacity : 0,
                transform : "translatex(40px)"
            })),
            state("visible", style({
                opacity : 1,
                transform : "translateX(0)"
            })),
            transition('hidden <=> visible', [
                animate('.5s ease-out')
            ])
        ]),
        fadeIn
    ]
})

export class HeaderComponent{
    pencilhub_watermark = "assets/images/mainpage/pencilhub.in-logo.svg"
    togglePopup = false
    constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2, private router: Router) {}
    
    onHeaderBar(){
        if ( this.togglePopup ) {
            this.slideInLeftText = false
            this.cdr.detectChanges()

            setTimeout(() => {
                this.togglePopup = false
                this.enableScroll()
            }, 500);
        } else {
            this.togglePopup = true
            setTimeout(() => {
                this.slideInLeftText = true
                this.cdr.detectChanges()
                this.disableScroll();
            }, 0);
        }
    }
    disableScroll() {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
    }
    
    enableScroll() {
        this.renderer.removeStyle(document.body, 'overflow');
    }

    slideInLeftText = false
    onInView() {
        this.slideInLeftText = true
        this.cdr.detectChanges()
    }
 
    headLi = false
    headLiView() {
        this.headLi = true
    }

    isActive(route: string): boolean {
        return this.router.url === route;
    }
}