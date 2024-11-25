import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EXAMPLEATTRIBUTE_MODULE_DECLARATIONS, ExampleAttributeRoutingModule} from  './ExampleAttribute-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ExampleAttributeRoutingModule
  ],
  declarations: EXAMPLEATTRIBUTE_MODULE_DECLARATIONS,
  exports: EXAMPLEATTRIBUTE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExampleAttributeModule { }