import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] bg-cream overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/ombreHD2.mp4"
        loop
        autoPlay
        muted
        playsInline
      />

      {/* Overlay to darken/lighten the video */}
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Experience the Luxury
            <br />
            <span className="text-brown">One Sample at a Time</span>
          </h2>
          <p className="text-white text-lg md:text-xl mb-8 max-w-md">
            Discover the exquisite world of Louis Vuitton fragrances through our
            premium sample collection, allowing you to explore the finest scents
            before committing to a full bottle.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/collections"
              className="bg-brown text-cream hover:brown transition-all px-8 py-3 font-sans text-sm uppercase tracking-wider inline-block text-center"
            >
              Explore Collection
            </Link>
            <Link
              to="/bestsellers"
              className="border border-brown text-white hover:brown hover:text-cream transition-all px-8 py-3 font-sans text-sm uppercase tracking-wider inline-block text-center"
            >
              Shop Bestsellers
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
