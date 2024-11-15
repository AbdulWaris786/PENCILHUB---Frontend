import { ChangeDetectorRef, Component, HostListener, Renderer2 } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Router } from "@angular/router";
import { fadeIn } from "../../animation";

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
    isScrolled = false
    hasScrolled = false
    LutsliHovered = false
    LutsliClicked = false
    LRliHovered = false
    LRliClicked = false
    ModapkliHovered = false
    ModapkliClicked = false

    constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2, private router: Router) {}
    
    @HostListener("window:scroll", [])
    onWindowScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop
        this.isScrolled = scrollPosition > 0
        // this.hasScrolled = window.scrollY > 50
    }

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

    onHeaderNavigate(route: string) {
        this.togglePopup = false
        this.enableScroll()
        if( route === '' ) return
        window.open(`https://pencilhub.in/${route}`)
    }

    headerLiClicked(li: string) {
        if ( li === "Luts" ) {
            this.LutsliClicked = !this.LutsliClicked
            this.LRliClicked = false
            this.ModapkliClicked = false
        } else if ( li === "Lr" ) {
            this.LRliClicked = !this.LRliClicked
            this.LutsliClicked = false
            this.ModapkliClicked = false
        } else if ( li === "Mod" ) {
            this.ModapkliClicked = !this.ModapkliClicked
            this.LutsliClicked = false
            this.LRliClicked = false
        } else {
            return
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