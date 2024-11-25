import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ExampleAttribute-new',
  templateUrl: './ExampleAttribute-new.component.html',
  styleUrls: ['./ExampleAttribute-new.component.scss']
})
export class ExampleAttributeNewComponent {
  @ViewChild("ExampleAttributeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}