import { Component } from "@angular/core";

@Component({
    selector:'app-first-page',
    templateUrl:'./mainpage.component.html',
    styleUrls:['./mainpage.component.css']
})

export class MainPageComponent {
    posts: Array<string> = [
        "assets/images/works/Ae transition 1tumb .png", "assets/images/works/EP10.png", "assets/images/works/ep12cc.png", "assets/images/works/EP7.png", "assets/images/works/video-editing-pc-&laptop-tumb.png", "assets/images/works/video-editing-pc-&laptop-tumb.png"
    ]

    videos: Array<string> = [
        "assets/images/works/Ae transition 1tumb .png", "assets/images/works/EP10.png", "assets/images/works/ep12cc.png", "assets/images/works/EP7.png", "assets/images/works/video-editing-pc-&laptop-tumb.png", "assets/images/works/video-editing-pc-&laptop-tumb.png"
    ]
}