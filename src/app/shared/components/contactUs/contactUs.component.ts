import { ChangeDetectorRef, Component, Input } from "@angular/core";
import { fadeIn, slideInBottom, slideInLeft } from "../../animation";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BackendService } from "src/app/services/backend.service";

@Component({
    selector : "contact-us-component",
    templateUrl : "./contactUs.component.html",
    animations : [
        slideInBottom, slideInLeft, fadeIn
    ]
})
export class ConatactUsComponent {
    constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private backendService: BackendService) {}
    @Input() info: string = ""

    slideInBottomText = false
    slideLeftAnimation = false
    fadeIn = false

    contactForm: FormGroup = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.minLength(10)]]
      });

    onSliderInView() {
        this.slideInBottomText = true
        this.cdr.detectChanges()
    }
    onHeadInView() {
        this.slideLeftAnimation = true
        this.cdr.detectChanges()
    }
    onFadeInInView() {
        this.fadeIn = true
        this.cdr.detectChanges()
    }

    fullNameError: boolean = false
    fullNameTouched: boolean = false
   
    onFullNameChange(event: any){
        this.fullNameTouched = true        
        this.fullNameError = !this.contactForm.get('fullName')?.valid
        setTimeout(() => {
            this.fullNameTouched = false
            this.fullNameError = false
        }, 3000);
    }

    emailError: boolean = false
    emailTouched: boolean = false
    emailErrorPattern: boolean | undefined = false

    onEmailChange(event: Event){
        const target = event.target as HTMLInputElement
        this.emailTouched = true
        this.emailError = target.value ? false : true

        if(target.value){
            this.emailErrorPattern = 
            this.contactForm.get('email')?.hasError('pattern')
        }

        setTimeout(() => {
            this.emailTouched = false
            this.emailError = false
            this.emailErrorPattern = false
        }, 3000);
    }

    messageError: boolean = false
    messageTouched: boolean = false
   
    onMessageChange(event: any){
        this.messageTouched = true
        this.messageError = !this.contactForm.get('message')?.valid
        setTimeout(() => {
            this.messageTouched = false
            this.messageError = false
        }, 3000);
    }

    onSubmit() {
        if (this.contactForm.valid) {
            if ( this.info === "Me") {
                this.backendService.contactMe(this.contactForm.value).subscribe({
                    next: (response: any) => {},
                    error: (response: any) => {}
                })
            } else {
                this.backendService.contactUs(this.contactForm.value).subscribe({
                    next: (response: any) => {},
                    error: (response: any) => {}
                })
            }
        } else {
          console.log('Form is invalid');
        }
    }
}