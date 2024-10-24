export interface Category {
  id: string;
  name: string;
  available: boolean;
  description: string;
  products: Product[];
}

export interface Product {
  description: string;
  name: string;
  available: boolean;
  price: number;
  stock: number;
  category: string;
  id: string;
  img: string;
}
