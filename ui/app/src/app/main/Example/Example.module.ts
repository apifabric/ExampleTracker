import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EXAMPLE_MODULE_DECLARATIONS, ExampleRoutingModule} from  './Example-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ExampleRoutingModule
  ],
  declarations: EXAMPLE_MODULE_DECLARATIONS,
  exports: EXAMPLE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExampleModule { }