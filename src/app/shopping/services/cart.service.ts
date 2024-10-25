import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { CartItem, CartResponse } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl: string = `${environment.baseUrl}/cart`;
  private readonly http = inject(HttpClient);
  private token = localStorage.getItem('token');

  private userCart: WritableSignal<CartResponse> = signal({} as CartResponse);

  constructor() {
    this.loadUserCart();
  }

  private loadUserCart() {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.token,
    );
    this.http
      .get<CartResponse>(this.baseUrl, { headers })
      .subscribe((response) => this.userCart.set(response));
  }

  getUserCart() {
    return this.userCart;
  }

  updateCartItem(productId: string, newQuantity: number) {
    const body = { productId, newQuantity };
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.token,
    );

    return this.http
      .put<CartItem>(this.baseUrl, body, { headers })
      .subscribe((updatedItem) => {
        const currentCart = this.userCart();

        const updatedCartItems = currentCart.cartItems.map((item) =>
          item.id === updatedItem.id ? updatedItem : item,
        );

        this.userCart.set({ ...currentCart, cartItems: updatedCartItems });
      });
  }
}
