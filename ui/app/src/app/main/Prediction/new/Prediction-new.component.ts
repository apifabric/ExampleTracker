import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Prediction-new',
  templateUrl: './Prediction-new.component.html',
  styleUrls: ['./Prediction-new.component.scss']
})
export class PredictionNewComponent {
  @ViewChild("PredictionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}