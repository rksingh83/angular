import { Directive, HostListener, Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCatchEvent]'
})
export class CatchEventDirective {
    @Input('appCatchEvent') args:string
  constructor(private el:ElementRef) {
    
  }
   @HostListener('blur') onBlur(){
      console.log('blur');
      console.log(this.el.nativeElement.style)
   }
}
