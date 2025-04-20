import React from 'react';
import { Link } from 'react-router-dom';
import { perfumes } from '../../data/perfumes';
import { motion } from 'framer-motion';

const FeaturedProducts: React.FC = () => {
  const featuredPerfumes = perfumes.filter(perfume => perfume.isBestseller).slice(0, 4);

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown mb-3">
            Bestselling Fragrances
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Discover our most sought-after luxury samples, each offering a glimpse into the world of exceptional perfumery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPerfumes.map((perfume, index) => (
            <motion.div 
              key={perfume.id}
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
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/collections" className="border border-brown text-brown hover:bg-brown hover:text-cream transition-all px-8 py-3 font-sans text-sm uppercase tracking-wider inline-block">
            View All Fragrances
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;