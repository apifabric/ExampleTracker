import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Example-card.component.html',
  styleUrls: ['./Example-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Example-card]': 'true'
  }
})

export class ExampleCardComponent {


}