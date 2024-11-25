import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuleHomeComponent } from './home/Rule-home.component';
import { RuleNewComponent } from './new/Rule-new.component';
import { RuleDetailComponent } from './detail/Rule-detail.component';

const routes: Routes = [
  {path: '', component: RuleHomeComponent},
  { path: 'new', component: RuleNewComponent },
  { path: ':id', component: RuleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Rule-detail-permissions'
      }
    }
  },{
    path: ':rule_id/Diff', loadChildren: () => import('../Diff/Diff.module').then(m => m.DiffModule),
    data: {
        oPermission: {
            permissionId: 'Diff-detail-permissions'
        }
    }
},{
    path: ':rule_id/ExampleComparison', loadChildren: () => import('../ExampleComparison/ExampleComparison.module').then(m => m.ExampleComparisonModule),
    data: {
        oPermission: {
            permissionId: 'ExampleComparison-detail-permissions'
        }
    }
},{
    path: ':rule_id/Prediction', loadChildren: () => import('../Prediction/Prediction.module').then(m => m.PredictionModule),
    data: {
        oPermission: {
            permissionId: 'Prediction-detail-permissions'
        }
    }
},{
    path: ':rule_id/RuleAuthor', loadChildren: () => import('../RuleAuthor/RuleAuthor.module').then(m => m.RuleAuthorModule),
    data: {
        oPermission: {
            permissionId: 'RuleAuthor-detail-permissions'
        }
    }
}
];

export const RULE_MODULE_DECLARATIONS = [
    RuleHomeComponent,
    RuleNewComponent,
    RuleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuleRoutingModule { }