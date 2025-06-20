export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  subcategory?: string;
  rating: number;
  reviews: number;
  description: string;
  features?: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'placed' | 'shipped' | 'out-for-delivery' | 'delivered' | 'cancelled';
  orderDate: string;
  deliveryDate?: string;
  address: string;
  phone: string;
  paymentMethod: 'cod' | 'upi' | 'card';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export type Category = 'clothing' | 'gadgets' | 'books' | 'cosmetics' | 'furniture' | 'grocery';

export type ViewType = 'home' | 'category' | 'product' | 'cart' | 'wishlist' | 'checkout' | 'orders' | 'login' | 'signup';