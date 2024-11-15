import { Component } from "@angular/core";

@Component({
    selector:'app-first-page',
    templateUrl:'./mainpage.component.html',
    styleUrls:['./mainpage.component.css']
})

export class MainPageComponent {}




// this.videos = response.items.map((video: any) => ({
//     videoId : video.id.videoId,
//     title : video.snippet.title,
//     thumbnail : video.snippet.thumbnails.medium.url,
//     safeUrl : this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.id.videoId}`)
// }))