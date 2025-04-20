import React from 'react';
import { Link } from 'react-router-dom';
import { Perfume } from '../../types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  perfume: Perfume;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ perfume, index = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/product/${perfume.id}`} className="block">
        <div className="relative overflow-hidden mb-4 bg-white">
          <img 
            src={perfume.imageUrl} 
            alt={perfume.name} 
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {perfume.isNewArrival && (
            <span className="absolute top-4 left-4 bg-gold text-white px-3 py-1 text-xs uppercase font-semibold">
              New
            </span>
          )}
          {perfume.isBestseller && !perfume.isNewArrival && (
            <span className="absolute top-4 left-4 bg-brown text-white px-3 py-1 text-xs uppercase font-semibold">
              Bestseller
            </span>
          )}
        </div>
        <div className="text-center">
          <h3 className="font-serif text-lg text-brown font-medium">
            {perfume.brand}
          </h3>
          <p className="text-charcoal font-light mb-2">{perfume.name}</p>
          <p className="text-gold-dark font-medium">${perfume.price}.00</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;