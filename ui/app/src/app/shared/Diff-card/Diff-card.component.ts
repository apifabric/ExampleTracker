import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Diff-card.component.html',
  styleUrls: ['./Diff-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Diff-card]': 'true'
  }
})

export class DiffCardComponent {


}