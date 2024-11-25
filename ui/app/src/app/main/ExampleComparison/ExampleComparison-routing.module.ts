import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComparisonHomeComponent } from './home/ExampleComparison-home.component';
import { ExampleComparisonNewComponent } from './new/ExampleComparison-new.component';
import { ExampleComparisonDetailComponent } from './detail/ExampleComparison-detail.component';

const routes: Routes = [
  {path: '', component: ExampleComparisonHomeComponent},
  { path: 'new', component: ExampleComparisonNewComponent },
  { path: ':id', component: ExampleComparisonDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ExampleComparison-detail-permissions'
      }
    }
  }
];

export const EXAMPLECOMPARISON_MODULE_DECLARATIONS = [
    ExampleComparisonHomeComponent,
    ExampleComparisonNewComponent,
    ExampleComparisonDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleComparisonRoutingModule { }