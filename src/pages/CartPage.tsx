import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  
  if (cart.length === 0) {
    return (
      <Layout>
        <div className="py-16 bg-cream min-h-[70vh] flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <ShoppingBag size={48} className="mx-auto mb-6 text-brown-light" />
              <h1 className="font-serif text-3xl font-bold text-brown mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-brown-light mb-8">
                Looks like you haven't added any samples to your cart yet.
              </p>
              <Link 
                to="/collections" 
                className="bg-brown text-cream hover:bg-brown-dark transition-all px-8 py-3 font-sans text-sm uppercase tracking-wider inline-block"
              >
                Browse Collections
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl font-bold text-brown mb-8">
            Your Cart
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-sm p-6 mb-6">
                <div className="hidden sm:grid sm:grid-cols-12 border-b border-brown/10 pb-4 mb-4">
                  <div className="sm:col-span-6">
                    <span className="text-sm text-brown-dark font-medium">Product</span>
                  </div>
                  <div className="sm:col-span-2 text-center">
                    <span className="text-sm text-brown-dark font-medium">Size</span>
                  </div>
                  <div className="sm:col-span-2 text-center">
                    <span className="text-sm text-brown-dark font-medium">Quantity</span>
                  </div>
                  <div className="sm:col-span-2 text-right">
                    <span className="text-sm text-brown-dark font-medium">Total</span>
                  </div>
                </div>
                
                {cart.map((item, index) => (
                  <motion.div 
                    key={`${item.perfume.id}-${item.size}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="grid grid-cols-12 items-center py-4 border-b border-brown/10 last:border-b-0"
                  >
                    {/* Product */}
                    <div className="col-span-12 sm:col-span-6 flex items-center mb-4 sm:mb-0">
                      <div className="w-20 h-20 bg-cream flex-shrink-0 mr-4">
                        <img 
                          src={item.perfume.imageUrl} 
                          alt={item.perfume.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-serif text-base text-brown font-medium">
                          {item.perfume.brand}
                        </h3>
                        <p className="text-sm text-charcoal mb-1">{item.perfume.name}</p>
                        <p className="text-sm text-gold-dark font-medium block sm:hidden">
                          ${item.price}.00
                        </p>
                      </div>
                    </div>
                    
                    {/* Size */}
                    <div className="col-span-4 sm:col-span-2 text-center mb-2 sm:mb-0">
                      <span className="block sm:hidden text-xs text-brown-dark font-medium mb-1">Size</span>
                      <span className="text-sm text-brown-light">{item.size}</span>
                    </div>
                    
                    {/* Quantity */}
                    <div className="col-span-4 sm:col-span-2 text-center mb-2 sm:mb-0">
                      <span className="block sm:hidden text-xs text-brown-dark font-medium mb-1">Quantity</span>
                      <div className="flex justify-center">
                        <button 
                          onClick={() => updateQuantity(item.perfume.id, item.size, Math.max(1, item.quantity - 1))}
                          className="text-brown-light hover:text-brown transition-colors"
                        >
                          -
                        </button>
                        <span className="mx-3 text-brown-dark">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.perfume.id, item.size, Math.min(10, item.quantity + 1))}
                          className="text-brown-light hover:text-brown transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Total & Remove */}
                    <div className="col-span-4 sm:col-span-2 flex items-center justify-end">
                      <span className="hidden sm:block text-sm text-brown-dark font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button 
                        onClick={() => removeFromCart(item.perfume.id, item.size)}
                        className="ml-4 text-brown-light hover:text-brown transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-between">
                <Link 
                  to="/collections" 
                  className="border border-brown text-brown hover:bg-brown hover:text-cream transition-all px-6 py-2 font-sans text-sm"
                >
                  Continue Shopping
                </Link>
                <button 
                  onClick={clearCart}
                  className="border border-brown/70 text-brown-light hover:text-brown transition-all px-6 py-2 font-sans text-sm"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-sm p-6">
                <h2 className="font-serif text-xl font-bold text-brown mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-brown-light">Subtotal</span>
                    <span className="text-brown-dark font-medium">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brown-light">Shipping</span>
                    <span className="text-brown-dark font-medium">$5.00</span>
                  </div>
                  <div className="border-t border-brown/10 pt-4">
                    <div className="flex justify-between">
                      <span className="text-brown-dark font-medium">Total</span>
                      <span className="text-brown font-bold">${(getTotalPrice() + 5).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-brown text-cream hover:bg-brown-dark transition-all px-6 py-3 font-sans text-sm uppercase tracking-wider mb-4">
                  Proceed to Checkout
                </button>
                
                <div className="text-xs text-brown-light text-center">
                  <p>Secure Checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;