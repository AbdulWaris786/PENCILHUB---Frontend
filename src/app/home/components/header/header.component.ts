import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent{
    onHeaderBar(){
        console.log('hlo');
        const header =document.getElementById('mobile-menu-2')
        if(header){
            
        }
        console.log('kerilla');

    }
}