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
    sec1 = false
    sec2 = false
    sec3 = false

    socialMediaIcons = [
        { img : "assets/images/mainpage/instagram.svg", messenger : "instagram" },
        { img : "assets/images/mainpage/youtube.svg", messenger : "youtube" },
        { img : "assets/images/mainpage/pinterest.png", messenger :  "pinterest"},
        { img : "assets/images/mainpage/facebook.svg", messenger : "facebook" },
        { img : "assets/images/mainpage/whatsapp.png", messenger : "whatsapp" },
        { img : "assets/images/mainpage/linkedin.svg", messenger :  "linkedin"},
    ]
     
    navigate(messenger: string) {        
        if ( messenger === "whatsapp" ) {
            window.open("https://wa.me/message/SUQ7DJ7DBEEJA1", "_blank")
        } else if ( messenger === "instagram" ) {
            window.open("https://www.instagram.com/pencil_hub/?hl=en", "_blank")
        } else if ( messenger === "facebook" ) {
            window.open("https://www.facebook.com/profile.php?id=61557420675397", "_blank")
        } else if ( messenger === "pinterest" ) {
            window.open("https://pin.it/3cPD3xJaZ", "_blank")
        } else if ( messenger === "linkedin" ) {
            window.open("https://www.linkedin.com/in/miqdad-mk/", "_blank")
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