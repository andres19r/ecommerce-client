import { Component, computed, inject, Signal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { Category } from '../../interfaces/category.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  private readonly categoryService = inject(CategoryService);
  private readonly cartService = inject(CartService);
  categories: Signal<Category[]> = this.categoryService.getAll();
  userCart = this.cartService.getUserCart();

  filteredCategories: Signal<Category[]> = computed(() => {
    const categories = this.categories();
    const cartItems = this.userCart().cartItems;
    const cartProductIds = cartItems.map(item => item.product);

    return categories.map(category => ({
      ...category,
      products: category.products.filter(product => !cartProductIds.includes(product.id))
    }));
  });
}
