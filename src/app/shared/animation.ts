import { animate, state, style, transition, trigger } from "@angular/animations";

export const slideInLeft = trigger("slideInLeft", [
    state('hidden', style({
        opacity: 0,
        transform: 'translateX(-100%)'
    })),
    state('visible', style({
        opacity: 1,
        transform : "translateX(0)"
    })),
    transition('hidden => visible', [
        animate('1s ease-out')
    ])
])

export const fadeIn = trigger("fadeIn", [
    state("hidden", style({
        opacity : 0,
        transform: 'translateY(50px)'
    })),
    state("visible", style({
        opacity : 1,
        transform: 'translateY(0)'
    })),
    transition('hidden => visible', [
        animate('.7s .5s ease-in')
    ]),
])