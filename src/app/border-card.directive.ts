import { style } from "@angular/animations";
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder("#F5F5F5");
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder("#009688");
  }

  @HostListener("mouseenter") onMouseLeave() {
    this.setBorder("#F5F5F5");
  }

  private setHeight(height: number) {
    this.el.nativeElement.height = `${height}px`;
  }

  private setBorder(color: string) {
    this.el.nativeElement.border = `solid 4x ${color}`;
  }
}
