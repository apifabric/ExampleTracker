import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RULEAUTHOR_MODULE_DECLARATIONS, RuleAuthorRoutingModule} from  './RuleAuthor-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RuleAuthorRoutingModule
  ],
  declarations: RULEAUTHOR_MODULE_DECLARATIONS,
  exports: RULEAUTHOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RuleAuthorModule { }