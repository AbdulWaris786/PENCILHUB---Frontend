import { Component } from "@angular/core";
import { fadeIn, slideInLeft } from "../../animation";

@Component({
    selector : "app-footer",
    templateUrl : "./footer.component.html",
    animations : [
        slideInLeft, fadeIn
    ]
})
export class FooterComponent {
    pencilhub_watermark = "assets/images/mainpage/pencilhub.in-logo.svg"
    sec1 = false
    sec2 = false
    sec3 = false

    socialMediaIcons = [
        { img : "assets/images/mainpage/facebook.svg", messenger : "facebook" },
        { img : "assets/images/mainpage/instagram.svg", messenger : "instagram" },
        { img : "assets/images/mainpage/twitterwhite.svg", messenger : "twitter" },
        { img : "assets/images/mainpage/youtube.svg", messenger : "youtube" },
        { img : "assets/images/mainpage/linkedin.svg", messenger :  "linkedin"}
    ]
    
    navigate(messenger: string) {        
        if ( messenger === "whatsapp" ) {
            window.open("https://wa.me/+918593858991", "_blank")
        } else if ( messenger === "instagram" ) {
            window.open("https://www.instagram.com/pencil_hub", "_blank")
        } else if ( messenger === "facebook" ) {
            window.open("https://www.facebook.com/yourfacebookpage", "_blank")
        } else if ( messenger === "twitter" ) {
            window.open("https://twitter.com/yourtwitterhandle", "_blank")
        } else if ( messenger === "linkedin" ) {
            window.open("https://linkedin.com/linkedin", "_blank")
        } else {
            window.open("https://www.youtube.com/PencilHub", "_blank")
        }
    }

    sec1View() {
        this.sec1 = true
    }
    sec2View() {
        this.sec2 = true
    }
    sec3View() {
        this.sec3 = true
    }

    onFooterNavigate(route: string) {
        window.open(`https://pencilhub.in/${route}`)
    }
}