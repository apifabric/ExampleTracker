import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuleAuthorHomeComponent } from './home/RuleAuthor-home.component';
import { RuleAuthorNewComponent } from './new/RuleAuthor-new.component';
import { RuleAuthorDetailComponent } from './detail/RuleAuthor-detail.component';

const routes: Routes = [
  {path: '', component: RuleAuthorHomeComponent},
  { path: 'new', component: RuleAuthorNewComponent },
  { path: ':id', component: RuleAuthorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RuleAuthor-detail-permissions'
      }
    }
  }
];

export const RULEAUTHOR_MODULE_DECLARATIONS = [
    RuleAuthorHomeComponent,
    RuleAuthorNewComponent,
    RuleAuthorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuleAuthorRoutingModule { }