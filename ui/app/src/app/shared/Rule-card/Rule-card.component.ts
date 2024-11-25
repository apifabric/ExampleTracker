import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Rule-card.component.html',
  styleUrls: ['./Rule-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Rule-card]': 'true'
  }
})

export class RuleCardComponent {


}