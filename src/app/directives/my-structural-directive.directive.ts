import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({


  selector: '[appMyStructuralDirective]'
})
export class MyStructuralDirectiveDirective {
  @Input() set unless(condition: boolean) {
    if (!condition) {
      this.viewContainerReference.createEmbeddedView(this.templateReference);
    } else {
      this.viewContainerReference.clear();
    }
  }

  constructor(private templateReference: TemplateRef<any>, private viewContainerReference: ViewContainerRef) {


  }

}
