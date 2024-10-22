import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ytVideo } from "src/app/models/ytVideo.interface";
import { BackendService } from "src/app/services/backend.service";

@Component({
    selector:'app-first-page',
    templateUrl:'./mainpage.component.html',
    styleUrls:['./mainpage.component.css']
})

export class MainPageComponent implements OnInit {
    constructor(private backendService: BackendService, private sanitizer: DomSanitizer) {}
    // videos: any = [
    //     "assets/images/works/Ae transition 1tumb .png", "assets/images/works/EP10.png", "assets/images/works/ep12cc.png", "assets/images/works/EP7.png", "assets/images/works/video-editing-pc-&laptop-tumb.png", "assets/images/works/video-editing-pc-&laptop-tumb.png"
    // ]
    videos: Array<ytVideo> = []
 
    ngOnInit(): void {
        this.backendService.getPosts().subscribe({
            next: (response: any) => {
                
                this.posts = response.map((post: any) => ({
                    id: post.id,
                    title: post.title.rendered,
                    sourceUrl: post.source_url,
                    media_type : post.media_type,
                    caption: post.caption.rendered,
                    link: post.link.substring(0, post.link.lastIndexOf("/", post.link.lastIndexOf("/") - 1))
                }))
                
            },
            error: (respose: any) => {
                console.log(respose.error);                
            }
        })

        this.backendService.getVideos().subscribe({
            next: (response: any) => {
                this.videos = response.items.map((video: any) => ({
                    videoId : video.id.videoId,
                    title : video.snippet.title,
                    thumbnail : video.snippet.thumbnails.medium.url,
                    safeUrl : this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.id.videoId}`)
                }))
                
            },
            error: (respose: any) => {
                console.log(123, respose, respose.error);
            }
        })
    }

    posts: any = [
        "assets/images/works/Ae transition 1tumb .png", "assets/images/works/EP10.png", "assets/images/works/ep12cc.png", "assets/images/works/EP7.png", "assets/images/works/video-editing-pc-&laptop-tumb.png", "assets/images/works/video-editing-pc-&laptop-tumb.png"
    ]
}