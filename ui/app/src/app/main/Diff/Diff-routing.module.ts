import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiffHomeComponent } from './home/Diff-home.component';
import { DiffNewComponent } from './new/Diff-new.component';
import { DiffDetailComponent } from './detail/Diff-detail.component';

const routes: Routes = [
  {path: '', component: DiffHomeComponent},
  { path: 'new', component: DiffNewComponent },
  { path: ':id', component: DiffDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Diff-detail-permissions'
      }
    }
  }
];

export const DIFF_MODULE_DECLARATIONS = [
    DiffHomeComponent,
    DiffNewComponent,
    DiffDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiffRoutingModule { }