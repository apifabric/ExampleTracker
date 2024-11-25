import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ExampleAuthor-card.component.html',
  styleUrls: ['./ExampleAuthor-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ExampleAuthor-card]': 'true'
  }
})

export class ExampleAuthorCardComponent {


}