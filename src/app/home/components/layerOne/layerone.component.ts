import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import * as AOS from 'aos'
import { fadeIn, slideInBottom, slideInLeft, slideInRight } from "src/app/shared/animation";

@Component({
    selector : "app-layer-one",
    templateUrl : "./layerone.conponent.html",
    styleUrls : ['./layerone.conponent.css'],
    animations : [
      slideInBottom, slideInLeft, slideInRight, fadeIn,
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
          animate('.5s 1s ease-out')
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
          animate('.4s 1s ease-out')
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
          animate('.7s 1s ease-out')
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
          animate('.7s 1s ease-out')
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
          animate('.5s 1s ease-out')
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
          animate('.4s 1s ease-out') 
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