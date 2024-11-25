import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionHomeComponent } from './home/Prediction-home.component';
import { PredictionNewComponent } from './new/Prediction-new.component';
import { PredictionDetailComponent } from './detail/Prediction-detail.component';

const routes: Routes = [
  {path: '', component: PredictionHomeComponent},
  { path: 'new', component: PredictionNewComponent },
  { path: ':id', component: PredictionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Prediction-detail-permissions'
      }
    }
  }
];

export const PREDICTION_MODULE_DECLARATIONS = [
    PredictionHomeComponent,
    PredictionNewComponent,
    PredictionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictionRoutingModule { }