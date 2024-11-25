import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeHomeComponent } from './home/Attribute-home.component';
import { AttributeNewComponent } from './new/Attribute-new.component';
import { AttributeDetailComponent } from './detail/Attribute-detail.component';

const routes: Routes = [
  {path: '', component: AttributeHomeComponent},
  { path: 'new', component: AttributeNewComponent },
  { path: ':id', component: AttributeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Attribute-detail-permissions'
      }
    }
  },{
    path: ':attribute_id/ExampleAttribute', loadChildren: () => import('../ExampleAttribute/ExampleAttribute.module').then(m => m.ExampleAttributeModule),
    data: {
        oPermission: {
            permissionId: 'ExampleAttribute-detail-permissions'
        }
    }
}
];

export const ATTRIBUTE_MODULE_DECLARATIONS = [
    AttributeHomeComponent,
    AttributeNewComponent,
    AttributeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributeRoutingModule { }