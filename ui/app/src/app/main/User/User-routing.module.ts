import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/ExampleAuthor', loadChildren: () => import('../ExampleAuthor/ExampleAuthor.module').then(m => m.ExampleAuthorModule),
    data: {
        oPermission: {
            permissionId: 'ExampleAuthor-detail-permissions'
        }
    }
},{
    path: ':user_id/RuleAuthor', loadChildren: () => import('../RuleAuthor/RuleAuthor.module').then(m => m.RuleAuthorModule),
    data: {
        oPermission: {
            permissionId: 'RuleAuthor-detail-permissions'
        }
    }
},{
    path: ':user_id/Session', loadChildren: () => import('../Session/Session.module').then(m => m.SessionModule),
    data: {
        oPermission: {
            permissionId: 'Session-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }