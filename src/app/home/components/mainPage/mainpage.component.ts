import { Component, OnInit } from "@angular/core";
import { BackendService } from "src/app/services/backend.service";

@Component({
    selector:'app-first-page',
    templateUrl:'./mainpage.component.html',
    styleUrls:['./mainpage.component.css']
})

export class MainPageComponent implements OnInit {
    constructor(private backendService: BackendService) {}

    ngOnInit(): void {
        this.backendService.getPosts().subscribe({
            next: (response: any) => {
                
                this.posts = response.map((post: any) => ({
                    id: post.id,
                    title: post.title.rendered,
                    sourceUrl: post.source_url,
                    media_type : post.media_type,
                    caption: post.caption.rendered,
                }))
                console.log("data", this.posts);
            },
            error: (respose: any) => {
                console.log(respose.error);                
            }
        })

        // this.backendService.getVideos().subscribe({
        //     next: (response: any) => {
        //         this.videos = response.videos
        //     },
        //     error: (respose: any) => {}
        // })
    }

    posts: any = [
        "assets/images/works/Ae transition 1tumb .png", "assets/images/works/EP10.png", "assets/images/works/ep12cc.png", "assets/images/works/EP7.png", "assets/images/works/video-editing-pc-&laptop-tumb.png", "assets/images/works/video-editing-pc-&laptop-tumb.png"
    ]

    videos: any = [
        "assets/images/works/Ae transition 1tumb .png", "assets/images/works/EP10.png", "assets/images/works/ep12cc.png", "assets/images/works/EP7.png", "assets/images/works/video-editing-pc-&laptop-tumb.png", "assets/images/works/video-editing-pc-&laptop-tumb.png"
    ]
}