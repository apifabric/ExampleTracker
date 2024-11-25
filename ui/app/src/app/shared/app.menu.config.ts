import { MenuRootItem } from 'ontimize-web-ngx';

import { AttributeCardComponent } from './Attribute-card/Attribute-card.component';

import { DiffCardComponent } from './Diff-card/Diff-card.component';

import { ExampleCardComponent } from './Example-card/Example-card.component';

import { ExampleAttributeCardComponent } from './ExampleAttribute-card/ExampleAttribute-card.component';

import { ExampleAuthorCardComponent } from './ExampleAuthor-card/ExampleAuthor-card.component';

import { ExampleComparisonCardComponent } from './ExampleComparison-card/ExampleComparison-card.component';

import { LogCardComponent } from './Log-card/Log-card.component';

import { PredictionCardComponent } from './Prediction-card/Prediction-card.component';

import { RuleCardComponent } from './Rule-card/Rule-card.component';

import { RuleAuthorCardComponent } from './RuleAuthor-card/RuleAuthor-card.component';

import { SessionCardComponent } from './Session-card/Session-card.component';

import { UserCardComponent } from './User-card/User-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Attribute', name: 'ATTRIBUTE', icon: 'view_list', route: '/main/Attribute' }
    
        ,{ id: 'Diff', name: 'DIFF', icon: 'view_list', route: '/main/Diff' }
    
        ,{ id: 'Example', name: 'EXAMPLE', icon: 'view_list', route: '/main/Example' }
    
        ,{ id: 'ExampleAttribute', name: 'EXAMPLEATTRIBUTE', icon: 'view_list', route: '/main/ExampleAttribute' }
    
        ,{ id: 'ExampleAuthor', name: 'EXAMPLEAUTHOR', icon: 'view_list', route: '/main/ExampleAuthor' }
    
        ,{ id: 'ExampleComparison', name: 'EXAMPLECOMPARISON', icon: 'view_list', route: '/main/ExampleComparison' }
    
        ,{ id: 'Log', name: 'LOG', icon: 'view_list', route: '/main/Log' }
    
        ,{ id: 'Prediction', name: 'PREDICTION', icon: 'view_list', route: '/main/Prediction' }
    
        ,{ id: 'Rule', name: 'RULE', icon: 'view_list', route: '/main/Rule' }
    
        ,{ id: 'RuleAuthor', name: 'RULEAUTHOR', icon: 'view_list', route: '/main/RuleAuthor' }
    
        ,{ id: 'Session', name: 'SESSION', icon: 'view_list', route: '/main/Session' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AttributeCardComponent

    ,DiffCardComponent

    ,ExampleCardComponent

    ,ExampleAttributeCardComponent

    ,ExampleAuthorCardComponent

    ,ExampleComparisonCardComponent

    ,LogCardComponent

    ,PredictionCardComponent

    ,RuleCardComponent

    ,RuleAuthorCardComponent

    ,SessionCardComponent

    ,UserCardComponent

];