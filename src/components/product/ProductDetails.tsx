import React from 'react';
import { Perfume } from '../../types';
import AddToCartForm from './AddToCartForm';
import { motion } from 'framer-motion';

interface ProductDetailsProps {
  perfume: Perfume;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ perfume }) => {
  return (
    <section className="py-12 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img 
                src={perfume.imageUrl} 
                alt={perfume.name}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
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
          </motion.div>
          
          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h1 className="font-serif text-3xl text-brown font-bold">
                {perfume.brand}
              </h1>
              <h2 className="text-xl text-charcoal mb-2">{perfume.name}</h2>
              <p className="text-gold-dark font-medium text-xl">
                Starting at ${perfume.price}.00
              </p>
            </div>
            
            <div>
              <p className="text-brown-light leading-relaxed">
                {perfume.description}
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-brown-dark mb-3">Fragrance Notes</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm text-gold font-medium mb-2">Top Notes</h4>
                  <ul className="text-sm space-y-1">
                    {perfume.notes.top.map((note, index) => (
                      <li key={index} className="text-brown-light">{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm text-gold font-medium mb-2">Heart Notes</h4>
                  <ul className="text-sm space-y-1">
                    {perfume.notes.middle.map((note, index) => (
                      <li key={index} className="text-brown-light">{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm text-gold font-medium mb-2">Base Notes</h4>
                  <ul className="text-sm space-y-1">
                    {perfume.notes.base.map((note, index) => (
                      <li key={index} className="text-brown-light">{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-t border-b border-brown/10 py-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <h4 className="text-xs text-brown-dark uppercase mb-1">Collection</h4>
                  <p className="text-sm text-brown-light">{perfume.collection}</p>
                </div>
                <div>
                  <h4 className="text-xs text-brown-dark uppercase mb-1">Year</h4>
                  <p className="text-sm text-brown-light">{perfume.year}</p>
                </div>
                <div>
                  <h4 className="text-xs text-brown-dark uppercase mb-1">Category</h4>
                  <p className="text-sm text-brown-light">{perfume.category.join(', ')}</p>
                </div>
                <div>
                  <h4 className="text-xs text-brown-dark uppercase mb-1">Season</h4>
                  <p className="text-sm text-brown-light">{perfume.season?.join(', ')}</p>
                </div>
              </div>
            </div>
            
            <AddToCartForm perfume={perfume} />
            
            <div className="pt-4 text-xs text-brown-light">
              <p>All samples are hand-decanted from authentic, brand new bottles of the original fragrance.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;