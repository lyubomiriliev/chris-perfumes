import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Perfume, CartItem } from '../../types';
import { useCart } from '../../context/CartContext';

interface AddToCartFormProps {
  perfume: Perfume;
}

const AddToCartForm: React.FC<AddToCartFormProps> = ({ perfume }) => {
  const [selectedSize, setSelectedSize] = useState(perfume.availableSizes?.[0].size || "2ml");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  
  const { addToCart } = useCart();
  
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= 10) {
      setQuantity(value);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedSizeInfo = perfume.availableSizes?.find(
      size => size.size === selectedSize
    );
    
    if (!selectedSizeInfo) return;
    
    const cartItem: CartItem = {
      perfume,
      quantity,
      size: selectedSize,
      price: selectedSizeInfo.price
    };
    
    addToCart(cartItem);
    
    setMessage('Added to cart successfully!');
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Size Selection */}
        <div>
          <label htmlFor="size" className="block text-brown-dark font-medium mb-2">
            Size
          </label>
          <select
            id="size"
            value={selectedSize}
            onChange={handleSizeChange}
            className="w-full border border-brown/20 p-3 bg-white outline-none focus:border-gold transition-colors"
          >
            {perfume.availableSizes?.map((size) => (
              <option key={size.size} value={size.size}>
                {size.size} - ${size.price}.00
              </option>
            ))}
          </select>
        </div>
        
        {/* Quantity Selector */}
        <div>
          <label htmlFor="quantity" className="block text-brown-dark font-medium mb-2">
            Quantity
          </label>
          <div className="flex border border-brown/20">
            <button 
              type="button" 
              onClick={decrementQuantity}
              className="px-4 py-2 text-brown hover:bg-cream transition-colors"
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max="10"
              className="w-full text-center border-x border-brown/20 p-2 outline-none"
            />
            <button 
              type="button" 
              onClick={incrementQuantity}
              className="px-4 py-2 text-brown hover:bg-cream transition-colors"
            >
              +
            </button>
          </div>
        </div>
        
        {/* Add to Cart Button */}
        <button 
          type="submit"
          className="w-full bg-brown text-cream hover:bg-brown-dark transition-all px-6 py-3 font-sans text-sm uppercase tracking-wider"
        >
          Add to Cart
        </button>
        
        {/* Success Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-gold/10 border border-gold p-3 text-brown text-center"
          >
            {message}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default AddToCartForm;