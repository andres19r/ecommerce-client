export interface CartResponse {
  cart: Cart;
  cartItems: CartItem[];
}

export interface Cart {
  createdAt: Date;
  user: string;
  updatedAt: Date;
  id: string;
}

export interface CartItem {
  cart: string;
  product: string;
  productName: string;
  quantity: number;
  price: number;
  addedAt: Date;
  img: string;
  id: string;
}
