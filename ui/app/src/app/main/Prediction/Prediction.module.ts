import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PREDICTION_MODULE_DECLARATIONS, PredictionRoutingModule} from  './Prediction-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PredictionRoutingModule
  ],
  declarations: PREDICTION_MODULE_DECLARATIONS,
  exports: PREDICTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PredictionModule { }