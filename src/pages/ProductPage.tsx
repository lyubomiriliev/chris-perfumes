import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductDetails from '../components/product/ProductDetails';
import { perfumes } from '../data/perfumes';
import ProductCard from '../components/common/ProductCard';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const perfume = perfumes.find(p => p.id === id);
  
  // Get other perfumes from the same collection for recommendations
  const relatedPerfumes = perfumes
    .filter(p => p.collection === perfume?.collection && p.id !== id)
    .slice(0, 4);
  
  if (!perfume) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="font-serif text-2xl text-brown mb-4">Product Not Found</h2>
          <p className="text-brown-light mb-6">Sorry, we couldn't find the perfume you're looking for.</p>
          <Link to="/collections" className="bg-brown text-cream hover:bg-brown-dark transition-all px-6 py-2 font-sans text-sm uppercase tracking-wider">
            Browse Collections
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <ProductDetails perfume={perfume} />
      
      {/* Related Products */}
      {relatedPerfumes.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-brown mb-3">
                You May Also Like
              </h2>
              <p className="text-brown-light">
                Discover other fragrances from the {perfume.collection} collection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedPerfumes.map((relatedPerfume, index) => (
                <ProductCard
                  key={relatedPerfume.id}
                  perfume={relatedPerfume}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductPage;