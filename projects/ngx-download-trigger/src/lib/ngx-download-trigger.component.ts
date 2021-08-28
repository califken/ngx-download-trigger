import { Component, ElementRef, Input, ViewChild } from '@angular/core';
@Component({
  selector: 'ngx-download-trigger',
  template: `<a #aTag (click)="download()"><ng-content></ng-content></a>`,
  styles: [],
})
export class NgxDownloadTriggerComponent {
  @ViewChild('aTag') aTag: ElementRef;
  @Input() fileURL: string;
  constructor() {}
  download() {
    this.aTag.nativeElement.href = this.fileURL;
    this.aTag.nativeElement.download = this.fileURL.split('/').pop();
    this.aTag.nativeElement.click();
  }
}
