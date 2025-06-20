import { Product } from '../types';

export const products: Product[] = [
  // Clothing - Men
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 899,
    originalPrice: 1299,
    image: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg",
    category: "clothing",
    subcategory: "men",
    rating: 4.5,
    reviews: 324,
    description: "Comfortable premium cotton t-shirt perfect for casual wear. Made with 100% organic cotton.",
    features: ["100% Organic Cotton", "Pre-shrunk", "Machine Washable", "Available in multiple colors"],
    inStock: true
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 2499,
    originalPrice: 3499,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    category: "clothing",
    subcategory: "men",
    rating: 4.7,
    reviews: 189,
    description: "Classic denim jacket with modern fit. Perfect for layering and casual outings.",
    features: ["Premium Denim", "Classic Fit", "Button Closure", "Multiple Pockets"],
    inStock: true
  },
  
  // Clothing - Women
  {
    id: 3,
    name: "Floral Summer Dress",
    price: 1799,
    originalPrice: 2499,
    image: "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg",
    category: "clothing",
    subcategory: "women",
    rating: 4.6,
    reviews: 267,
    description: "Beautiful floral summer dress made with breathable fabric. Perfect for warm weather.",
    features: ["Breathable Fabric", "Floral Print", "Comfortable Fit", "Machine Washable"],
    inStock: true
  },
  {
    id: 4,
    name: "Elegant Blouse",
    price: 1299,
    originalPrice: 1799,
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
    category: "clothing",
    subcategory: "women",
    rating: 4.4,
    reviews: 156,
    description: "Sophisticated blouse suitable for office wear and formal occasions.",
    features: ["Professional Look", "Wrinkle Resistant", "Multiple Colors", "Easy Care"],
    inStock: true
  },

  // Gadgets
  {
    id: 5,
    name: "Wireless Bluetooth Headphones",
    price: 3999,
    originalPrice: 5999,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    category: "gadgets",
    subcategory: "audio",
    rating: 4.8,
    reviews: 445,
    description: "Premium wireless headphones with noise cancellation and superior sound quality.",
    features: ["Active Noise Cancellation", "30-hour Battery", "Quick Charge", "Premium Sound"],
    inStock: true
  },
  {
    id: 6,
    name: "Smartphone Case",
    price: 599,
    originalPrice: 899,
    image: "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg",
    category: "gadgets",
    subcategory: "mobile",
    rating: 4.3,
    reviews: 234,
    description: "Protective smartphone case with shock absorption and wireless charging compatibility.",
    features: ["Drop Protection", "Wireless Charging Compatible", "Anti-fingerprint", "Precise Cutouts"],
    inStock: true
  },

  // Books
  {
    id: 7,
    name: "The Art of Programming",
    price: 1499,
    originalPrice: 1999,
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    category: "books",
    subcategory: "technology",
    rating: 4.9,
    reviews: 89,
    description: "Comprehensive guide to modern programming practices and algorithms.",
    features: ["Latest Edition", "Practical Examples", "Expert Author", "Comprehensive Coverage"],
    inStock: true
  },
  {
    id: 8,
    name: "Mystery Novel Collection",
    price: 899,
    originalPrice: 1299,
    image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
    category: "books",
    subcategory: "fiction",
    rating: 4.5,
    reviews: 167,
    description: "Collection of thrilling mystery novels from bestselling authors.",
    features: ["5 Books Collection", "Bestselling Authors", "Engaging Stories", "Premium Paper"],
    inStock: true
  },

  // Cosmetics
  {
    id: 9,
    name: "Luxury Skincare Set",
    price: 2999,
    originalPrice: 4499,
    image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg",
    category: "cosmetics",
    subcategory: "skincare",
    rating: 4.7,
    reviews: 312,
    description: "Complete skincare routine set with cleanser, serum, and moisturizer.",
    features: ["Complete Set", "Natural Ingredients", "Dermatologist Tested", "All Skin Types"],
    inStock: true
  },
  {
    id: 10,
    name: "Premium Lipstick",
    price: 799,
    originalPrice: 1199,
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
    category: "cosmetics",
    subcategory: "makeup",
    rating: 4.6,
    reviews: 198,
    description: "Long-lasting premium lipstick with moisturizing formula.",
    features: ["Long-lasting", "Moisturizing", "Rich Color", "Cruelty Free"],
    inStock: true
  },

  // Furniture
  {
    id: 11,
    name: "Modern Coffee Table",
    price: 8999,
    originalPrice: 12999,
    image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
    category: "furniture",
    subcategory: "living-room",
    rating: 4.5,
    reviews: 78,
    description: "Sleek modern coffee table perfect for contemporary living spaces.",
    features: ["Solid Wood", "Modern Design", "Easy Assembly", "Scratch Resistant"],
    inStock: true
  },
  {
    id: 12,
    name: "Ergonomic Office Chair",
    price: 12999,
    originalPrice: 18999,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
    category: "furniture",
    subcategory: "office",
    rating: 4.8,
    reviews: 124,
    description: "Comfortable ergonomic office chair with lumbar support and adjustable height.",
    features: ["Ergonomic Design", "Lumbar Support", "Adjustable Height", "5-Year Warranty"],
    inStock: true
  },

  // Grocery
  {
    id: 13,
    name: "Organic Honey",
    price: 599,
    originalPrice: 799,
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg",
    category: "grocery",
    subcategory: "organic",
    rating: 4.6,
    reviews: 267,
    description: "Pure organic honey sourced directly from local beekeepers.",
    features: ["100% Pure", "Organic Certified", "No Additives", "Natural Source"],
    inStock: true
  },
  {
    id: 14,
    name: "Premium Tea Collection",
    price: 1299,
    originalPrice: 1699,
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg",
    category: "grocery",
    subcategory: "beverages",
    rating: 4.4,
    reviews: 145,
    description: "Assorted collection of premium teas from around the world.",
    features: ["5 Varieties", "Premium Quality", "Individually Packed", "Fresh Aroma"],
    inStock: true
  }
];

export const categories = [
  { id: 'clothing', name: 'Clothing', subcategories: ['men', 'women', 'kids'] },
  { id: 'gadgets', name: 'Gadgets', subcategories: ['mobile', 'audio', 'laptops'] },
  { id: 'books', name: 'Books', subcategories: ['fiction', 'non-fiction', 'technology'] },
  { id: 'cosmetics', name: 'Cosmetics', subcategories: ['skincare', 'makeup', 'fragrance'] },
  { id: 'furniture', name: 'Furniture', subcategories: ['living-room', 'bedroom', 'office'] },
  { id: 'grocery', name: 'Grocery', subcategories: ['organic', 'beverages', 'snacks'] }
];