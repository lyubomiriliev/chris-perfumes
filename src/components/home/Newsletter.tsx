import React, { useState } from "react";
import { motion } from "framer-motion";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In a real app, you would handle the subscription here
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-brown">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
              Join Our World of Luxury
            </h2>
            <p className="text-cream/80 mb-8 leading-relaxed">
              Subscribe to our newsletter and be the first to discover new
              arrivals, exclusive offers, and expert fragrance insights.
            </p>

            {isSubmitted ? (
              <div className="bg-gold/20 border border-gold/30 p-6 rounded-lg">
                <p className="text-cream font-medium">
                  Thank you for subscribing!
                </p>
                <p className="text-cream/80 text-sm mt-2">
                  Your journey into the world of luxury fragrances begins now.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-grow px-4 py-3 outline-none border-2 border-transparent focus:border-gold bg-white/10 text-cream placeholder:text-cream/50"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-brown transition-colors px-8 py-3 font-sans text-sm uppercase tracking-wider"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-cream/60 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from Atanassov perfumes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
