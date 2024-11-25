import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleHomeComponent } from './home/Example-home.component';
import { ExampleNewComponent } from './new/Example-new.component';
import { ExampleDetailComponent } from './detail/Example-detail.component';

const routes: Routes = [
  {path: '', component: ExampleHomeComponent},
  { path: 'new', component: ExampleNewComponent },
  { path: ':id', component: ExampleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Example-detail-permissions'
      }
    }
  },{
    path: ':example_id/ExampleAttribute', loadChildren: () => import('../ExampleAttribute/ExampleAttribute.module').then(m => m.ExampleAttributeModule),
    data: {
        oPermission: {
            permissionId: 'ExampleAttribute-detail-permissions'
        }
    }
},{
    path: ':example_id/ExampleAuthor', loadChildren: () => import('../ExampleAuthor/ExampleAuthor.module').then(m => m.ExampleAuthorModule),
    data: {
        oPermission: {
            permissionId: 'ExampleAuthor-detail-permissions'
        }
    }
},{
    path: ':new_example_id/ExampleComparison', loadChildren: () => import('../ExampleComparison/ExampleComparison.module').then(m => m.ExampleComparisonModule),
    data: {
        oPermission: {
            permissionId: 'ExampleComparison-detail-permissions'
        }
    }
},{
    path: ':example_id/Prediction', loadChildren: () => import('../Prediction/Prediction.module').then(m => m.PredictionModule),
    data: {
        oPermission: {
            permissionId: 'Prediction-detail-permissions'
        }
    }
},{
    path: ':example_supported_id/Rule', loadChildren: () => import('../Rule/Rule.module').then(m => m.RuleModule),
    data: {
        oPermission: {
            permissionId: 'Rule-detail-permissions'
        }
    }
},{
    path: ':source_case_data_id/Rule', loadChildren: () => import('../Rule/Rule.module').then(m => m.RuleModule),
    data: {
        oPermission: {
            permissionId: 'Rule-detail-permissions'
        }
    }
}
];

export const EXAMPLE_MODULE_DECLARATIONS = [
    ExampleHomeComponent,
    ExampleNewComponent,
    ExampleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }