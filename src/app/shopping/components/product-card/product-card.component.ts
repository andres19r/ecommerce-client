import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../interfaces/category.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  private readonly cartService = inject(CartService);
  product = input.required<Product>();

  addProductToCart() {
    this.cartService.addProductToCart(this.product().id);
  }
}
