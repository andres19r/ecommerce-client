import { Component, inject, input } from '@angular/core';
import { CartItem } from '../../interfaces/cart.interface';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  private readonly cartService = inject(CartService);
  cartItem = input.required<CartItem>();

  constructor() {}

  updateProduct(productId: string, newQuantity: number): void {
    if (newQuantity === 0) {
      this.removeProduct(productId);
      return;
    }

    this.cartService.updateCartItem(productId, newQuantity);
  }

  removeProduct(productId: string): void {
    this.cartService.removeCartItem(productId);
  }
}
