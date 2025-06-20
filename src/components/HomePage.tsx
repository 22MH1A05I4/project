import React from 'react';
import { ArrowRight, TrendingUp, Zap, Shield, Truck } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface HomePageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onViewProduct: (product: Product) => void;
  wishlist: Product[];
  onViewChange: (view: string, data?: any) => void;
}

export default function HomePage({ 
  products, 
  onAddToCart, 
  onToggleWishlist, 
  onViewProduct, 
  wishlist,
  onViewChange 
}: HomePageProps) {
  const featuredProducts = products.slice(0, 8);
  const categories = [
    { id: 'clothing', name: 'Clothing', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg', items: '500+ Items' },
    { id: 'gadgets', name: 'Gadgets', image: 'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg', items: '300+ Items' },
    { id: 'books', name: 'Books', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg', items: '1000+ Items' },
    { id: 'cosmetics', name: 'Beauty', image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg', items: '200+ Items' },
    { id: 'furniture', name: 'Furniture', image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg', items: '150+ Items' },
    { id: 'grocery', name: 'Grocery', image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg', items: '800+ Items' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-300">Kartzy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover amazing products at unbeatable prices. Your one-stop destination for everything you need.
            </p>
            <button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
              onClick={() => onViewChange('category', { category: 'clothing' })}
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders above ₹999</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment processing</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery within 2-3 days</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive prices guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => onViewChange('category', { category: category.id })}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <button
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              onClick={() => onViewChange('category', { category: 'all' })}
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                onViewProduct={onViewProduct}
                isInWishlist={wishlist.some(item => item.id === product.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}