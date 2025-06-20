import React from 'react';
import { Package, Truck, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Order } from '../types';

interface OrderHistoryProps {
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onReturnOrder: (orderId: string) => void;
}

export default function OrderHistory({ orders, onCancelOrder, onReturnOrder }: OrderHistoryProps) {
  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'placed':
        return <Package className="h-5 w-5 text-blue-600" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-orange-600" />;
      case 'out-for-delivery':
        return <Truck className="h-5 w-5 text-purple-600" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Package className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'placed':
        return 'Order Placed';
      case 'shipped':
        return 'Shipped';
      case 'out-for-delivery':
        return 'Out for Delivery';
      case 'delivered':
        return 'Delivered';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  const canCancel = (order: Order) => {
    return order.status === 'placed';
  };

  const canReturn = (order: Order) => {
    if (order.status !== 'delivered' || !order.deliveryDate) return false;
    const deliveryDate = new Date(order.deliveryDate);
    const today = new Date();
    const daysDiff = (today.getTime() - deliveryDate.getTime()) / (1000 * 3600 * 24);
    return daysDiff <= 5;
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-24 w-24 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h2>
          <p className="text-gray-600 mb-6">Your order history will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>
        
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    {getStatusIcon(order.status)}
                    <span className="font-semibold text-lg">{getStatusText(order.status)}</span>
                  </div>
                  <p className="text-gray-600">Order ID: {order.id}</p>
                  <p className="text-gray-600">Placed on: {new Date(order.orderDate).toLocaleDateString()}</p>
                  {order.deliveryDate && (
                    <p className="text-gray-600">Delivered on: {new Date(order.deliveryDate).toLocaleDateString()}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">₹{order.total.toLocaleString()}</p>
                  <p className="text-gray-600 capitalize">{order.paymentMethod.replace('-', ' ')}</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="border-t pt-4 mb-4">
                <h3 className="font-semibold mb-3">Items ({order.items.length})</h3>
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={item.product.id} className="flex items-center space-x-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.product.name}</h4>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">₹{(item.product.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4 border-t">
                {canCancel(order) && (
                  <button
                    onClick={() => onCancelOrder(order.id)}
                    className="px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition-colors"
                  >
                    Cancel Order
                  </button>
                )}
                {canReturn(order) && (
                  <button
                    onClick={() => onReturnOrder(order.id)}
                    className="flex items-center space-x-2 px-4 py-2 border border-orange-300 text-orange-600 rounded-md hover:bg-orange-50 transition-colors"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>Return Items</span>
                  </button>
                )}
                {!canReturn(order) && order.status === 'delivered' && (
                  <p className="text-sm text-gray-500 flex items-center">
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Return window expired (5 days limit)
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}