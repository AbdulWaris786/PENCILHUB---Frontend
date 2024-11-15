import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BackendService } from "src/app/services/backend.service";
import { fadeIn, slideInBottom, slideInLeft } from "src/app/shared/animation";

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector : "slider-component",
    templateUrl : "./slider.component.html",
    styleUrls : ["./slider.component.css"],
    animations : [
        slideInBottom, slideInLeft, fadeIn
    ]
})
export class SliderComponent implements AfterViewInit {
    visibleContents: Array<string> = ["assets/images/works/EP10.png", "assets/images/works/EP10.png", "assets/images/works/ep12cc.png", "assets/images/works/video-editing-pc-&laptop-tumb.png", "assets/images/works/video-editing-pc-&laptop-tumb.png", "assets/images/works/video-editing-pc-&laptop-tumb.png"]

    constructor(private cdr: ChangeDetectorRef, private backendService: BackendService, private sanitizer: DomSanitizer) {}
  
    slideInBottomText = false
    slideLeftAnimation = false
    fadeIn = false
    
    @Input() delay: number = 2000
    @Input() contentType: string = ""
    posts: Array<any> = [];
    videos: Array<any> = []
    videoUrls: Array<any> = []
    
    slideLeft = false;
    slideRight = false;
    intervalId: any;
    
    ngAfterViewInit() {
        if ( this.contentType === "Post" ) {
            this.loadPosts()
            this.centerFirstItem()
        } 
        else if ( this.contentType === "Video" ) {
            this.loadVideos()
            this.centerFirstItem()
        }
    }

    loadPosts() {
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
                
                if (this.posts.length % 2 === 0) {
                    this.posts.pop()
                }
            },
            error: (respose: any) => {
                console.log(respose.error);                
            }
        })
    }
    
    loadVideos () {
        this.backendService.getVideos().subscribe({
            next : (response: any) => {
                const validVideoIds = response.items.filter((video: any) => video.id && video.id.videoId)
                if ( validVideoIds.length ) {
                    const videoIds = validVideoIds.map((video: any) => video.id.videoId)

                    this.backendService.getVideoDetails(videoIds).subscribe({
                        next : (detailsResponse: any[]) => {
                            const allVideos = detailsResponse.map(response => response.items).flat()
                            this.videos = allVideos.filter(video => video.contentDetails.duration.includes("M") || video.contentDetails.duration.includes("H")).slice(0, 7)                                                        
                        },
                        error : (error: any) => {
                            console.error("Error fetching video details:", error)
                        }
                    })
                }
            },
            error : (error: any) => {
                console.error(error)
            }
        })
    }

    videoClicked = false
    clickedVideo: any
    onVideoClicked(videoId: string) {
        this.popupAction()
        this.clickedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    }

    popupAction() {
        this.videoClicked = !this.videoClicked
    }
    
    onSliderInView() {
        this.slideInBottomText = true
        this.cdr.detectChanges()
        this.startAutoSlide();
    }

    onHeadInView() {
        this.slideLeftAnimation = true
        this.cdr.detectChanges()
    }

    onFadeInInView() {
        this.fadeIn = true
        this.cdr.detectChanges()
    }


    ngOnDestroy() {
        if (this.intervalId) clearInterval(this.intervalId);
    }
    
    centerFirstItem() {
        if (this.contentType === 'Post') {
            const centerIntex = (this.posts.length / 2) - 0.5 ;
            this.posts = this.posts.splice(-centerIntex).concat(this.posts);
        } else if (this.contentType === 'Video') {
            const centerIntex = (this.videos.length / 2) - 0.5 ;
            this.videos = this.videos.splice(-centerIntex).concat(this.videos);
        }
    }
  
    startAutoSlide() {
        this.intervalId = setInterval(() => {
            this.next();
        }, this.delay); // Auto-slide every 3 seconds
    }
  
    next() {
        this.resetAnimations();
        this.slideLeft = true;
        clearInterval(this.intervalId)
        this.startAutoSlide();
        setTimeout(() => {
            this.rotateRight();
        }, 500); // Duration of the slide animation
    }
  
    previous() {
        this.resetAnimations();
        this.slideRight = true;
        clearInterval(this.intervalId)
        this.startAutoSlide();
        setTimeout(() => {
            this.rotateLeft();
        }, 500); // Duration of the slide animation
    }
  
    rotateRight() {
        if (this.contentType === "Post") {
            const first = this.posts.shift();
            if (first) this.posts.push(first);
            this.resetAnimations();
        } else if (this.contentType === "Video") {
            const first = this.videos.shift();
            if (first) this.videos.push(first);
            this.resetAnimations();
        }
    }
  
    rotateLeft() {
        if (this.contentType === "Post") {
            const last = this.posts.pop();
            if (last) this.posts.unshift(last);
            this.resetAnimations();
        } else if (this.contentType === "Video") {
            const last = this.videos.pop();
            if (last) this.videos.unshift(last);
            this.resetAnimations();
        }
    }
  
    resetAnimations() {
        this.slideLeft = false;
        this.slideRight = false;
    }

    redirectToPage(url: string) {
        window.open(`${url}`)
    }

}