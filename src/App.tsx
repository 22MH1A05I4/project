import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Checkout from './components/Checkout';
import OrderHistory from './components/OrderHistory';
import Auth from './components/Auth';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { Product, CartItem, Order, ViewType, User } from './types';
import { products } from './data/products';
import { saveToLocalStorage, getFromLocalStorage } from './utils/storage';

function App() {
  // State management
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [viewData, setViewData] = useState<any>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [isLoginMode, setIsLoginMode] = useState(true);
  
  // Toast state
  const [toast, setToast] = useState({
    message: '',
    type: 'success' as 'success' | 'error' | 'info',
    isVisible: false
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedCart = getFromLocalStorage('kartzy-cart');
    const savedWishlist = getFromLocalStorage('kartzy-wishlist');
    const savedOrders = getFromLocalStorage('kartzy-orders');
    const savedUser = getFromLocalStorage('kartzy-user');

    if (savedCart) setCartItems(savedCart);
    if (savedWishlist) setWishlist(savedWishlist);
    if (savedOrders) setOrders(savedOrders);
    if (savedUser) setUser(savedUser);
  }, []);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    saveToLocalStorage('kartzy-cart', cartItems);
  }, [cartItems]);

  useEffect(() => {
    saveToLocalStorage('kartzy-wishlist', wishlist);
  }, [wishlist]);

  useEffect(() => {
    saveToLocalStorage('kartzy-orders', orders);
  }, [orders]);

  useEffect(() => {
    saveToLocalStorage('kartzy-user', user);
  }, [user]);

  // Utility functions
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  // Navigation functions
  const handleViewChange = (view: ViewType, data?: any) => {
    setCurrentView(view);
    setViewData(data);
  };

  // Cart functions
  const handleAddToCart = (product: Product) => {
    if (!product.inStock) {
      showToast('Product is out of stock', 'error');
      return;
    }

    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast('Added to cart successfully!');
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    showToast('Removed from cart');
  };

  // Wishlist functions
  const handleToggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const isInWishlist = prev.some(item => item.id === product.id);
      if (isInWishlist) {
        showToast('Removed from wishlist');
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast('Added to wishlist!');
        return [...prev, product];
      }
    });
  };

  // Order functions
  const handlePlaceOrder = (orderData: Omit<Order, 'id' | 'orderDate'>) => {
    const newOrder: Order = {
      ...orderData,
      id: `ORD${Date.now()}${Math.random().toString(36).substr(2, 5)}`,
      orderDate: new Date().toISOString(),
    };
    
    setOrders(prev => [newOrder, ...prev]);
    setCartItems([]);
    showToast('Order placed successfully!');
    handleViewChange('orders');
  };

  const handleCancelOrder = (orderId: string) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId
          ? { ...order, status: 'cancelled' as const }
          : order
      )
    );
    showToast('Order cancelled successfully');
  };

  const handleReturnOrder = (orderId: string) => {
    const order = orders.find(o => o.id === orderId);
    if (order && order.deliveryDate) {
      const deliveryDate = new Date(order.deliveryDate);
      const today = new Date();
      const daysDiff = (today.getTime() - deliveryDate.getTime()) / (1000 * 3600 * 24);
      
      if (daysDiff > 5) {
        showToast('Return window has expired (5 days limit)', 'error');
        return;
      }
    }
    
    // Here you would typically initiate a return process
    showToast('Return request submitted successfully');
  };

  // Auth functions
  const handleLogin = (email: string, password: string) => {
    // Mock authentication
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email,
      phone: '+91 12345 67890',
      address: '123 Main St, Mumbai, India'
    };
    setUser(mockUser);
    showToast('Logged in successfully!');
    handleViewChange('home');
  };

  const handleSignup = (userData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
  }) => {
    // Mock user creation
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      address: userData.address
    };
    setUser(newUser);
    showToast('Account created successfully!');
    handleViewChange('home');
  };

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomePage
            products={products}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onViewProduct={(product) => handleViewChange('product', { product })}
            wishlist={wishlist}
            onViewChange={handleViewChange}
          />
        );
      
      case 'category':
        return (
          <ProductListing
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onViewProduct={(product) => handleViewChange('product', { product })}
            wishlist={wishlist}
            selectedCategory={viewData?.category}
            searchQuery={searchQuery}
          />
        );
      
      case 'product':
        return (
          <ProductDetail
            product={viewData.product}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onBack={() => handleViewChange('category', { category: viewData.product.category })}
            isInWishlist={wishlist.some(item => item.id === viewData.product.id)}
          />
        );
      
      case 'cart':
        return (
          <Cart
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onCheckout={() => handleViewChange('checkout')}
          />
        );
      
      case 'wishlist':
        return (
          <Wishlist
            wishlist={wishlist}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onViewProduct={(product) => handleViewChange('product', { product })}
          />
        );
      
      case 'checkout':
        return (
          <Checkout
            cartItems={cartItems}
            onBack={() => handleViewChange('cart')}
            onPlaceOrder={handlePlaceOrder}
          />
        );
      
      case 'orders':
        return (
          <OrderHistory
            orders={orders}
            onCancelOrder={handleCancelOrder}
            onReturnOrder={handleReturnOrder}
          />
        );
      
      case 'login':
        return (
          <Auth
            isLoginMode={isLoginMode}
            onToggleMode={() => setIsLoginMode(!isLoginMode)}
            onLogin={handleLogin}
            onSignup={handleSignup}
          />
        );
      
      case 'signup':
        return (
          <Auth
            isLoginMode={false}
            onToggleMode={() => setIsLoginMode(true)}
            onLogin={handleLogin}
            onSignup={handleSignup}
          />
        );
      
      default:
        return (
          <HomePage
            products={products}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onViewProduct={(product) => handleViewChange('product', { product })}
            wishlist={wishlist}
            onViewChange={handleViewChange}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      
      <Header
        currentView={currentView}
        onViewChange={handleViewChange}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isLoggedIn={!!user}
      />
      
      <main>
        {renderCurrentView()}
      </main>
      
      {currentView !== 'login' && currentView !== 'signup' && <Footer />}
    </div>
  );
}

export default App;