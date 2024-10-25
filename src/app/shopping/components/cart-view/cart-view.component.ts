import { Component, inject, Signal } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { AuthService } from '../../../auth/services/auth.service';
import { CartResponse } from '../../interfaces/cart.interface';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CartItemComponent, CommonModule],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.scss',
})
export class CartViewComponent {
  private readonly authService = inject(AuthService)
  private readonly cartService = inject(CartService)
  cart: Signal<CartResponse> = this.cartService.getUserCart()

  get user() {
    return this.authService.user;
  }
}
