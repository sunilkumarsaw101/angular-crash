import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hightlightTheBg('blue');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hightlightTheBg(null);
  }

  hightlightTheBg(color: any) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
