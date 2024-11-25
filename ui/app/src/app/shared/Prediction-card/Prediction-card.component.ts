import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Prediction-card.component.html',
  styleUrls: ['./Prediction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Prediction-card]': 'true'
  }
})

export class PredictionCardComponent {


}