import { Component } from "@angular/core";

@Component({
    selector : "app-footer",
    templateUrl : "./footer.component.html"
})
export class FooterComponent {
    pencilhub_watermark = "assets/images/mainpage/pencilhub.in-logo.svg"

    socialMediaIcons = [
        "assets/images/mainpage/facebook.svg",
        "assets/images/mainpage/instagram.svg",
        "assets/images/mainpage/twitterwhite.svg",
        "assets/images/mainpage/youtube.svg",
        "assets/images/mainpage/linkedin.svg"
    ]
}