import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleAuthorHomeComponent } from './home/ExampleAuthor-home.component';
import { ExampleAuthorNewComponent } from './new/ExampleAuthor-new.component';
import { ExampleAuthorDetailComponent } from './detail/ExampleAuthor-detail.component';

const routes: Routes = [
  {path: '', component: ExampleAuthorHomeComponent},
  { path: 'new', component: ExampleAuthorNewComponent },
  { path: ':id', component: ExampleAuthorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ExampleAuthor-detail-permissions'
      }
    }
  }
];

export const EXAMPLEAUTHOR_MODULE_DECLARATIONS = [
    ExampleAuthorHomeComponent,
    ExampleAuthorNewComponent,
    ExampleAuthorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleAuthorRoutingModule { }