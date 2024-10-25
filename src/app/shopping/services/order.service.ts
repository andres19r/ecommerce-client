import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl: string = `${environment.baseUrl}/orders`;
  private readonly http = inject(HttpClient);
  private token = localStorage.getItem('token');

  constructor() {}

  createOrder(paymentMethod: string, shippingAddress: string) {
    const body = { paymentMethod, shippingAddress };
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.token,
    );
    return this.http.post(this.baseUrl, body, { headers });
  }
}
