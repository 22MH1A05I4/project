import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { categories } from '../data/products';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string, data?: any) => void;
  cartCount: number;
  wishlistCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isLoggedIn: boolean;
}

export default function Header({ 
  currentView, 
  onViewChange, 
  cartCount, 
  wishlistCount, 
  searchQuery, 
  onSearchChange,
  isLoggedIn 
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => onViewChange('home')}
          >
            <h1 className="text-2xl font-bold text-blue-600">Kartzy</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                currentView === 'home' ? 'text-blue-600' : ''
              }`}
              onClick={() => onViewChange('home')}
            >
              Home
            </button>
            
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              >
                Categories
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isCategoryDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => {
                        onViewChange('category', { category: category.id });
                        setIsCategoryDropdownOpen(false);
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </button>
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </button>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8 hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => onViewChange('wishlist')}
            >
              <Heart className="h-6 w-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => onViewChange('cart')}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => onViewChange(isLoggedIn ? 'orders' : 'login')}
            >
              <User className="h-6 w-6" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>

              {/* Mobile Navigation */}
              <button
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => {
                  onViewChange('home');
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </button>
              
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => {
                    onViewChange('category', { category: category.id });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {category.name}
                </button>
              ))}
              
              <button className="text-left text-gray-700 hover:text-blue-600 font-medium py-2">
                About
              </button>
              <button className="text-left text-gray-700 hover:text-blue-600 font-medium py-2">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}