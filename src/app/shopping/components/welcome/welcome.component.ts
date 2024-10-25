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
        'Un clásico de la pastelería francesa con una corteza mantecosa y un interior suave',
      price: 5.00,
      img: 'croissant.jpg',
    },
    {
      title: 'Cappuccino',
      description: 'Un espresso enriquecido con leche espumosa y un toque de arte',
      price: 4.00,
      img: 'cappuccino.jpg',
    },
    {
      title: 'Cheesecake',
      description: 'Indulgente y cremoso con un toque de vainilla',
      price: 8.0,
      img: 'cheesecake.jpg',
    },
  ];
  reviews: SimpleReview[] = [
    {
      content:
        "Los croissants están para morirse. Nunca he probado nada tan delicioso",
      author: 'Emily R.',
    },
    {
      content:
        'Un lugar perfecto para un café por la mañana y un dulce. Muy recomendable',
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
