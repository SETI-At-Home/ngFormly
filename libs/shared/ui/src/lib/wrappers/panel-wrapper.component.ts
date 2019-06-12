import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'formly-wrapper-panel',
    template: `
    <div class="card mb-5">
      <div class="card-header">{{ to.label }}</div>
      <div class="card-body">
        <ng-container #fieldComponent></ng-container>
        <button mat-raised-button type="submit" class="btn btn-success" [disabled]="!form.valid">
          Submit
        </button>
      </div>
      <div class="card-body">
        <h4>Results</h4>
      </div>
        <pre>{{ model | json }}</pre>
    </div>
  `
})
export class PanelWrapperComponent extends FieldWrapper {
    @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;
}
