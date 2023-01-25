import { style } from "@angular/animations";
import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  private initialColor: string = "#F5F5F5";
  private defaultColor: string = "#009688";
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input("pkmnBorderCard") borderColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener("mouseenter") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number) {
    this.el.nativeElement.height = `${height}px`;
  }

  private setBorder(color: string) {
    this.el.nativeElement.border = `solid 4x ${color}`;
  }
}
