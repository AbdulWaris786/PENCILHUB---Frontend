import { ChangeDetectorRef, Component, Renderer2 } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Router } from "@angular/router";

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
        ])
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

    navigate(messenger: string) {        
        if ( messenger === "whatsapp" ) {
            window.open("https://wa.me/+918593858991", "_blank")
        } else if ( messenger === "instagram" ) {
            window.open("https://www.instagram.com/pencil_hub", "_blank")
        } else if ( messenger === "facebook" ) {
            window.open("https://www.facebook.com/yourfacebookpage", "_blank")
        } else {
            window.open("https://twitter.com/yourtwitterhandle", "_blank")
        }
    }

    isActive(route: string): boolean {
        return this.router.url === route;
      }
}