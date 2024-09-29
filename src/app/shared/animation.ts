import { animate, state, style, transition, trigger } from "@angular/animations";

export const slideInLeft = trigger("slideInLeft", [
    state('hidden', style({
        opacity: .15,
        transform: 'translateX(-30px)'
    })),
    state('visible', style({
        opacity: 1,
        transform : "translateX(0)"
    })),
    transition('hidden => visible', [
        animate('.7s ease-out')
    ])
])

export const slideInBottom = trigger("slideInBottom", [
    state('hidden', style({
        opacity: 0,
        transform: 'translateY(100%)'
    })),
    state('visible', style({
        opacity: 1,
        transform : "translateY(0)"
    })),
    transition('hidden => visible', [
        animate('1s ease-out')
    ])
])

export const fadeInIMG = trigger("fadeIMG", [
    state('hidden', style({
        opacity: .5,
        transform: 'translateX(10px) scale(.98)'
    })),
    state('visible', style({
        opacity: 1,
        transform : "*"
    })),
    transition('hidden => visible', [
        animate('1s ease-out')
    ])
])

export const fadeIn = trigger("fadeIn", [
    state("hidden", style({
        opacity : .1,
        transform : 'scale(.96)'
    })),
    state("visible", style({
        opacity : 1,
    })),
    transition('hidden => visible', [
        animate('.7s .1s ease-out')
    ]),
])