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
          transform: 'translate(10rem, -7rem)'
        })),
        state('visible', style({
          opacity: 1,
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('1.2s 1.2s ease-out')
        ])
      ]),
      trigger('slideFromCenterPS', [
        state('hidden', style({
          opacity: 0,
          transform: 'translate(10rem, -7rem)'
        })),
        state('visible', style({
          opacity: 1,
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('1s 1s ease-out')
        ])
      ]),
      trigger('slideFromCenterME', [
        state('hidden', style({
          opacity: 0,
          transform: 'translate(10rem, 3rem)'
        })),
        state('visible', style({
          opacity: 1,
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('1s 1s ease-out')
        ])
      ]),
      trigger('slideFromCenterLR', [
        state('hidden', style({
          opacity: 0,
          transform: 'translate(-7rem, 5rem)'
        })),
        state('visible', style({
          opacity: 1,
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('1s 1s ease-out')
        ])
      ]),
      trigger('slideFromCenterAA', [
        state('hidden', style({
          opacity: 0,
          transform: 'translate(-7rem, -2rem)'
        })),
        state('visible', style({
          opacity: 1,
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('1s 1s ease-out')
        ])
      ]),
      trigger('slideFromCenterAP', [
        state('hidden', style({
          opacity: 0,
          transform: 'translate(-11rem, -7rem)'
        })),
        state('visible', style({
          opacity: 1,
          transform: '*'
        })),
        transition('hidden => visible', [
          animate('1.2s 1.2s ease-out')
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