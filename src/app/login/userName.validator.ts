import { AbstractControl, Validator, Validators } from "@angular/forms";

export class userNameValidators {
   static cannotcontainSpace(control:AbstractControl): Validators | null{

        if((control.value as string).indexOf(' ') >= 0) 
            return { cannotcontainSpace:true }
        return null;

    }

}