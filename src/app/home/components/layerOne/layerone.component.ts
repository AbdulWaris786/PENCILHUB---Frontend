import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectorRef, Component } from "@angular/core";
import { fadeIn, slideInBottom, slideInLeft } from "src/app/shared/animation";

@Component({
    selector : "app-layer-one",
    templateUrl : "./layerone.conponent.html",
    styleUrls : ['./layerone.conponent.css'],
    animations : [
      slideInBottom, slideInLeft, fadeIn,
      trigger('slideFromCenterAE', [
        state('hidden', style({
          opacity: 0,
          transform: 'translate(7rem, 1rem) rotate(75deg)'
          
        })),
        state('visible', style({
          opacity: 1,
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('.5s .3s ease-out')
        ])
      ]),
      trigger('slideFromCenterPS', [
        state('hidden', style({
          opacity: 0,
          transform: 'translate(4rem, 5rem) rotate(90deg)'  
        })),
        state('visible', style({
          opacity: 1,
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('.4s .3s ease-out')
        ])
      ]),
      trigger('slideFromCenterME', [
        state('hidden', style({
          opacity: 0,
          transform: 'translate(4rem, 9rem) rotate(70deg)' 
        })),
        state('visible', style({
          opacity: 1,
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('.7s .3s ease-out')
        ])
      ]),
      trigger('slideFromCenterLR', [
        state('hidden', style({
          opacity: 0,
          transform: 'translate(-5rem, 12rem) rotate(-900deg)' 
        })),
        state('visible', style({
          opacity: 1,
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('.7s .3s ease-out')
        ])
      ]),
      trigger('slideFromCenterAA', [
        state('hidden', style({
          opacity: 0,
          transform: 'translate(-7rem, 5rem) rotate(-90deg)' 
        })),
        state('visible', style({
          opacity: 1,
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('.5s .3s ease-out')
        ])
      ]),
      trigger('slideFromCenterAP', [
        state('hidden', style({
          opacity: 0,
          transform: 'translate(-7rem, 1rem) rotate(-70deg)'
        })),
        state('visible', style({
          opacity: 1,
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('.4s .3s ease-out') 
        ])
      ]),
      trigger('scale', [
        state('hidden', style({
          transform: 'scale(.98)'
        })),
        state('visible', style({
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('.3s ease-out') 
        ])
      ])
    ]
})
export class LayerOneComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  slideInLeftText: boolean = false
  showButton: boolean = false
  showMainImage: boolean = false
  showElements: boolean = false

  bannerImg = "assets/images/works/Layer-21.png"
  pencilhubText = "assets/images/mainpage/Screenshot_2024-08-17_163937-removebg-preview.png"
  splashImg = "/assets/images/mainpage/Splash.png"

  onBannerTextInView() {
    this.slideInLeftText = true
    this.showButton = true
    this.cdr.detectChanges()
  }

  onBannerImageInView() {
    this.showElements = true
    this.showMainImage = true
    this.cdr.detectChanges()
  }

}