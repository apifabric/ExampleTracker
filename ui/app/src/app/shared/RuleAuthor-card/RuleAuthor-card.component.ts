import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './RuleAuthor-card.component.html',
  styleUrls: ['./RuleAuthor-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.RuleAuthor-card]': 'true'
  }
})

export class RuleAuthorCardComponent {


}