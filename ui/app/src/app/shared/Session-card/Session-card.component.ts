import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Session-card.component.html',
  styleUrls: ['./Session-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Session-card]': 'true'
  }
})

export class SessionCardComponent {


}