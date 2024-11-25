import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ExampleComparison-card.component.html',
  styleUrls: ['./ExampleComparison-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ExampleComparison-card]': 'true'
  }
})

export class ExampleComparisonCardComponent {


}