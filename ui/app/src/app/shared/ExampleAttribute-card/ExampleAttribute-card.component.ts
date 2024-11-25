import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ExampleAttribute-card.component.html',
  styleUrls: ['./ExampleAttribute-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ExampleAttribute-card]': 'true'
  }
})

export class ExampleAttributeCardComponent {


}