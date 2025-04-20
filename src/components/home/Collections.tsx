import React from "react";
import { Link } from "react-router-dom";
import { collections } from "../../data/perfumes";
import { motion } from "framer-motion";

const collectionImages = [
  "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12181775/pexels-photo-12181775.jpeg",
  "https://images.pexels.com/photos/7319097/pexels-photo-7319097.jpeg",
];

const Collections: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown mb-3">
            Explore Our Collections
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Discover our carefully curated collections, each offering a unique
            olfactory experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <Link to={`/collections/${collection.id}`}>
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={collectionImages[index]}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-serif text-2xl font-bold mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-sm font-light text-cream/90 mb-4">
                        {collection.description}
                      </p>
                      <span className="border-b border-gold text-gold pb-1 inline-block uppercase text-sm tracking-wider font-medium">
                        Explore Collection
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
