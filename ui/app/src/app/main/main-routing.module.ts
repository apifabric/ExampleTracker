import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Attribute', loadChildren: () => import('./Attribute/Attribute.module').then(m => m.AttributeModule) },
    
        { path: 'Diff', loadChildren: () => import('./Diff/Diff.module').then(m => m.DiffModule) },
    
        { path: 'Example', loadChildren: () => import('./Example/Example.module').then(m => m.ExampleModule) },
    
        { path: 'ExampleAttribute', loadChildren: () => import('./ExampleAttribute/ExampleAttribute.module').then(m => m.ExampleAttributeModule) },
    
        { path: 'ExampleAuthor', loadChildren: () => import('./ExampleAuthor/ExampleAuthor.module').then(m => m.ExampleAuthorModule) },
    
        { path: 'ExampleComparison', loadChildren: () => import('./ExampleComparison/ExampleComparison.module').then(m => m.ExampleComparisonModule) },
    
        { path: 'Log', loadChildren: () => import('./Log/Log.module').then(m => m.LogModule) },
    
        { path: 'Prediction', loadChildren: () => import('./Prediction/Prediction.module').then(m => m.PredictionModule) },
    
        { path: 'Rule', loadChildren: () => import('./Rule/Rule.module').then(m => m.RuleModule) },
    
        { path: 'RuleAuthor', loadChildren: () => import('./RuleAuthor/RuleAuthor.module').then(m => m.RuleAuthorModule) },
    
        { path: 'Session', loadChildren: () => import('./Session/Session.module').then(m => m.SessionModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }