import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionHomeComponent } from './home/Session-home.component';
import { SessionNewComponent } from './new/Session-new.component';
import { SessionDetailComponent } from './detail/Session-detail.component';

const routes: Routes = [
  {path: '', component: SessionHomeComponent},
  { path: 'new', component: SessionNewComponent },
  { path: ':id', component: SessionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Session-detail-permissions'
      }
    }
  },{
    path: ':session_id/Log', loadChildren: () => import('../Log/Log.module').then(m => m.LogModule),
    data: {
        oPermission: {
            permissionId: 'Log-detail-permissions'
        }
    }
}
];

export const SESSION_MODULE_DECLARATIONS = [
    SessionHomeComponent,
    SessionNewComponent,
    SessionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }