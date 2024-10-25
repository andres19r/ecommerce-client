import { Component, signal } from '@angular/core';
import { SimpleProductCardComponent } from '../simple-product-card/simple-product-card.component';
import {
  SimpleProduct,
  SimpleReview,
} from '../../interfaces/product.interface';
import { SimpleReviewCardComponent } from '../simple-review-card/simple-review-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    SimpleProductCardComponent,
    SimpleReviewCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = signal('');
  products: SimpleProduct[] = [
    {
      title: 'Croissant',
      description:
        'A classic french pastry with a buttery crust and soft interior',
      price: 3.99,
      img: 'croissant.jpg',
    },
    {
      title: 'Cappuccino',
      description: 'Rich espresso topped with frothy milk and a touch of art.',
      price: 4.5,
      img: 'cappuccino.jpg',
    },
    {
      title: 'Cheesecake',
      description: 'Indulgent and creamy with a hint of vanilla.',
      price: 5.0,
      img: 'cheesecake.jpg',
    },
  ];
  reviews: SimpleReview[] = [
    {
      content:
        "The croissants are to die for! I've never tasted anything so delicious.",
      author: 'Emily R.',
    },
    {
      content:
        'A perfect spot for a morning coffee and a sweet treat. Highly recommend!',
      author: 'John D.',
    },
  ];

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
}
