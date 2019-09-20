import { Directive } from "@angular/core";
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[validateLocation]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi:true}] //adding directive to Angular's validators. multi=true MUST be there, otherwise you'll be overwriting NG_VALIDATORS
})

export class LocationValidator implements Validator{
  validate(formgroup:FormGroup):{[key:string]: any}{
    let addressControl = formgroup.controls['address'];
    let cityControl = formgroup.controls['address'];
    let countryControl = formgroup.controls['address'];
    let onlineUrlControl = (<FormGroup>formgroup.root).controls['onlineUrl'];

    if(
      ((addressControl && addressControl.value) && (cityControl && cityControl.value) && (countryControl && countryControl.value)) ||
      (onlineUrlControl && onlineUrlControl.value)){
        return null
      } else{
        return {validateLocation: false}
      }
  }
}
