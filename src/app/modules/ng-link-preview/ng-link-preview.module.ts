import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLinkPreviewComponent } from './ng-link-preview.component';

@NgModule({
  declarations: [
    NgLinkPreviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NgLinkPreviewComponent]
})
export class NgLinkPreviewModule { }
