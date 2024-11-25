import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Attribute-card.component.html',
  styleUrls: ['./Attribute-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Attribute-card]': 'true'
  }
})

export class AttributeCardComponent {


}