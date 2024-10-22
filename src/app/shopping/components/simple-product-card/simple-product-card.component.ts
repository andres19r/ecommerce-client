import { Component, input } from '@angular/core';
import { SimpleProduct } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-product-card.component.html',
  styleUrl: './simple-product-card.component.scss',
})
export class SimpleProductCardComponent {
  product = input.required<SimpleProduct>();
}
