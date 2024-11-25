import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ATTRIBUTE_MODULE_DECLARATIONS, AttributeRoutingModule} from  './Attribute-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AttributeRoutingModule
  ],
  declarations: ATTRIBUTE_MODULE_DECLARATIONS,
  exports: ATTRIBUTE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AttributeModule { }