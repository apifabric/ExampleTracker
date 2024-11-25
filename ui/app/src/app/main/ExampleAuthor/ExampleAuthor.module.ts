import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EXAMPLEAUTHOR_MODULE_DECLARATIONS, ExampleAuthorRoutingModule} from  './ExampleAuthor-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ExampleAuthorRoutingModule
  ],
  declarations: EXAMPLEAUTHOR_MODULE_DECLARATIONS,
  exports: EXAMPLEAUTHOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExampleAuthorModule { }