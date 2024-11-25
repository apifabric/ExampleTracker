import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'RuleAuthor-new',
  templateUrl: './RuleAuthor-new.component.html',
  styleUrls: ['./RuleAuthor-new.component.scss']
})
export class RuleAuthorNewComponent {
  @ViewChild("RuleAuthorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}