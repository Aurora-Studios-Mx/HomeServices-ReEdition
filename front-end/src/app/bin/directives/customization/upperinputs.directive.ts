import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpperinputs]',
})
export class UpperinputsDirective {

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event']) onInput(event: Event): void {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
  }
}
