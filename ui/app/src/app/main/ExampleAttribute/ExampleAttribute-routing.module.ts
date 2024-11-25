import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleAttributeHomeComponent } from './home/ExampleAttribute-home.component';
import { ExampleAttributeNewComponent } from './new/ExampleAttribute-new.component';
import { ExampleAttributeDetailComponent } from './detail/ExampleAttribute-detail.component';

const routes: Routes = [
  {path: '', component: ExampleAttributeHomeComponent},
  { path: 'new', component: ExampleAttributeNewComponent },
  { path: ':id', component: ExampleAttributeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ExampleAttribute-detail-permissions'
      }
    }
  }
];

export const EXAMPLEATTRIBUTE_MODULE_DECLARATIONS = [
    ExampleAttributeHomeComponent,
    ExampleAttributeNewComponent,
    ExampleAttributeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleAttributeRoutingModule { }