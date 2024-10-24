import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { toSignal } from '@angular/core/rxjs-interop';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl: string = `${environment.baseUrl}/categories`;
  private readonly http = inject(HttpClient);

  constructor() {}

  getAll(): Signal<Category[]> {
    return toSignal(this.http.get<Category[]>(this.baseUrl), {
      initialValue: [],
    });
  }
}
