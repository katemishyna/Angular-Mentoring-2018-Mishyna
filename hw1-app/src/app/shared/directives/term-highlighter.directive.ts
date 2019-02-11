import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[termHighlighter]'
})
export class TermHighlighterDirective implements OnInit {
  @Input('termHighlighter') creationDate: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    let timeDiff = this.getTimeDiff();
    if (timeDiff < 14 && timeDiff > 0) {
      this.el.nativeElement.style.border = '2px solid green';
    } else if (timeDiff < 0) {
      this.el.nativeElement.style.border = '2px solid lightblue';
    }
  }

  private getTimeDiff() {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();

    return Math.round((today.getTime() - this.creationDate.getTime()) / (oneDay));
  }
}
