import { Component, HostListener, OnInit } from "@angular/core";
import * as AOS from 'aos'

@Component({
    selector : "app-layer-one",
    templateUrl : "./layerone.conponent.html",
    styleUrls:['./layerone.conponent.css']
})
export class LayerOneComponent implements OnInit{
    ngOnInit(){
        AOS.init({
            duration: 1200, // Animation duration
            once: true, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
            easing: 'ease-out-back' // Easing function applied to animations
          });
          console.log('AOS Ini');
          
          AOS.refresh();
    }
    lastScrollY: number = 0;

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
    const animatedDivs = document.querySelectorAll('.scroll-animated') as NodeListOf<HTMLElement>;
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    animatedDivs.forEach((div) => {
      // Calculate the movement based on the scroll position
      const movement = (scrollY % viewportHeight) / viewportHeight * 200;

      // Check scroll direction and move the div
      if (scrollY > this.lastScrollY) {
        // Scrolling down, move right
        div.style.transform = `translateX(${movement}px)`;
      } else {
        // Scrolling up, move left
        div.style.transform = `translateX(-${movement}px)`;
      }
    });

    // Update last scroll position
    this.lastScrollY = scrollY;
  }
}