import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ExampleComparison-new',
  templateUrl: './ExampleComparison-new.component.html',
  styleUrls: ['./ExampleComparison-new.component.scss']
})
export class ExampleComparisonNewComponent {
  @ViewChild("ExampleComparisonForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}