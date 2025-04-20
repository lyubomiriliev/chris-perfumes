import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { perfumes, collections } from '../data/perfumes';
import ProductCard from '../components/common/ProductCard';
import { motion } from 'framer-motion';

const CollectionsPage: React.FC = () => {
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSeason, setActiveSeason] = useState<string | null>(null);
  
  const categories = Array.from(
    new Set(perfumes.flatMap(perfume => perfume.category))
  ).sort();
  
  const seasons = Array.from(
    new Set(perfumes.flatMap(perfume => perfume.season || []))
  ).sort();
  
  const filteredPerfumes = perfumes.filter(perfume => {
    if (activeCollection && perfume.collection !== activeCollection) return false;
    if (activeCategory && !perfume.category.includes(activeCategory)) return false;
    if (activeSeason && !perfume.season?.includes(activeSeason)) return false;
    return true;
  });
  
  const handleCollectionFilter = (collection: string | null) => {
    setActiveCollection(activeCollection === collection ? null : collection);
  };
  
  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  
  const handleSeasonFilter = (season: string | null) => {
    setActiveSeason(activeSeason === season ? null : season);
  };
  
  const clearFilters = () => {
    setActiveCollection(null);
    setActiveCategory(null);
    setActiveSeason(null);
  };
  
  return (
    <Layout>
      <div className="bg-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brown mb-4">
              Our Collections
            </h1>
            <p className="text-brown-light max-w-3xl mx-auto">
              Explore our curated collection of luxury perfume samples, each offering a unique olfactory journey for you to discover.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-cream py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white p-6 shadow-sm">
                <div className="mb-8">
                  <h3 className="font-serif text-lg font-medium text-brown mb-4">
                    Filter by Collection
                  </h3>
                  <div className="space-y-2">
                    {collections.map(collection => (
                      <button
                        key={collection.id}
                        className={`block w-full text-left px-2 py-1.5 rounded text-sm hover:bg-cream transition-colors ${
                          activeCollection === collection.name
                            ? 'bg-cream text-brown font-medium'
                            : 'text-brown-light'
                        }`}
                        onClick={() => handleCollectionFilter(collection.name)}
                      >
                        {collection.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-serif text-lg font-medium text-brown mb-4">
                    Filter by Category
                  </h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        className={`block w-full text-left px-2 py-1.5 rounded text-sm hover:bg-cream transition-colors ${
                          activeCategory === category
                            ? 'bg-cream text-brown font-medium'
                            : 'text-brown-light'
                        }`}
                        onClick={() => handleCategoryFilter(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-serif text-lg font-medium text-brown mb-4">
                    Filter by Season
                  </h3>
                  <div className="space-y-2">
                    {seasons.map(season => (
                      <button
                        key={season}
                        className={`block w-full text-left px-2 py-1.5 rounded text-sm hover:bg-cream transition-colors ${
                          activeSeason === season
                            ? 'bg-cream text-brown font-medium'
                            : 'text-brown-light'
                        }`}
                        onClick={() => handleSeasonFilter(season)}
                      >
                        {season}
                      </button>
                    ))}
                  </div>
                </div>
                
                {(activeCollection || activeCategory || activeSeason) && (
                  <button
                    className="w-full border border-brown text-brown hover:bg-brown hover:text-cream transition-all px-4 py-2 text-sm uppercase"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-brown-light">
                  Showing {filteredPerfumes.length} product{filteredPerfumes.length !== 1 ? 's' : ''}
                </p>
                
                <div className="flex items-center">
                  <span className="text-sm text-brown-light mr-2">Sort by:</span>
                  <select className="border border-brown/20 text-brown text-sm p-2 bg-white outline-none focus:border-gold transition-colors">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
              
              {filteredPerfumes.length === 0 ? (
                <div className="bg-white p-8 text-center rounded-lg">
                  <p className="text-brown-light mb-4">No products match your selected filters.</p>
                  <button
                    className="border border-brown text-brown hover:bg-brown hover:text-cream transition-all px-4 py-2 text-sm uppercase"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {filteredPerfumes.map((perfume, index) => (
                    <ProductCard key={perfume.id} perfume={perfume} index={index} />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CollectionsPage;