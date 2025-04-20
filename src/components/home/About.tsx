import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown mb-6">
              The Art of Perfume Sampling
            </h2>
            <p className="text-brown-light mb-4 leading-relaxed">
              At Atanassov Perfumes, we believe that finding your perfect
              fragrance is a journey worth taking. Our curated collection of
              luxury perfume samples allows you to explore the intricate
              artistry of master perfumers without committing to a full bottle.
            </p>
            <p className="text-brown-light mb-6 leading-relaxed">
              Each sample is carefully decanted from authentic, brand-new
              bottles, preserving the integrity and quality of these exceptional
              fragrances. Experience the evolution of scents as they interact
              with your skin, revealing their unique characteristics over time.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-light rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brown"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <span className="ml-3 text-sm text-brown-dark">
                  Authentic Products
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-light rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brown"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </div>
                <span className="ml-3 text-sm text-brown-dark">
                  Premium Packaging
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-light rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brown"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="ml-3 text-sm text-brown-dark">
                  Expert Curation
                </span>
              </div>
            </div>
            <Link
              to="/about"
              className="bg-brown text-cream hover:bg-brown-dark transition-all px-8 py-3 font-sans text-sm uppercase tracking-wider inline-block"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg"
                alt="Luxury perfume samples"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold/10 rounded-lg hidden lg:block"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-gold/10 rounded-lg hidden lg:block"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
