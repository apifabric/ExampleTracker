import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EXAMPLECOMPARISON_MODULE_DECLARATIONS, ExampleComparisonRoutingModule} from  './ExampleComparison-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ExampleComparisonRoutingModule
  ],
  declarations: EXAMPLECOMPARISON_MODULE_DECLARATIONS,
  exports: EXAMPLECOMPARISON_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExampleComparisonModule { }