import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { CartResponse } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baserUrl: string = `${environment.baseUrl}/cart`;
  private readonly http = inject(HttpClient);

  constructor() {}

  getUserCart() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return toSignal(this.http.get<CartResponse>(this.baserUrl, { headers }), {
      initialValue: {} as CartResponse,
    });
  }
}
