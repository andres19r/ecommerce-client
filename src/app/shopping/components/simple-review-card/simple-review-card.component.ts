import { Component, input } from '@angular/core';
import { SimpleReview } from '../../interfaces/product.interface';

@Component({
  selector: 'app-simple-review-card',
  standalone: true,
  imports: [],
  templateUrl: './simple-review-card.component.html',
  styleUrl: './simple-review-card.component.scss',
})
export class SimpleReviewCardComponent {
  review = input.required<SimpleReview>();
}
