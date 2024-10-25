import { Component, inject, Signal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  private readonly categoryService = inject(CategoryService);
  categories: Signal<Category[]> = this.categoryService.getAll();
}
