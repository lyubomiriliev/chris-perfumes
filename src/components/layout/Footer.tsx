import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="mb-8 md:mb-0">
            <img src="/chrislogo1.svg" className="w-40" alt="" />
            <p className="text-sm leading-relaxed mb-4">
              Discover the world of luxury fragrances through our carefully
              curated collection of premium perfume samples.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-cream hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-cream hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-cream hover:text-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-cream hover:text-gold transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-gold uppercase font-sans font-semibold text-sm tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/collections"
                  className="text-sm hover:text-gold transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/bestsellers"
                  className="text-sm hover:text-gold transition-colors"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className="text-sm hover:text-gold transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/gift-sets"
                  className="text-sm hover:text-gold transition-colors"
                >
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link
                  to="/brands"
                  className="text-sm hover:text-gold transition-colors"
                >
                  All Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-gold uppercase font-sans font-semibold text-sm tracking-wider mb-4">
              Information
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-sm hover:text-gold transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm hover:text-gold transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm hover:text-gold transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-sm hover:text-gold transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-gold uppercase font-sans font-semibold text-sm tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <span className="block">Email:</span>
                <a
                  href="mailto:info@essencevault.com"
                  className="hover:text-gold transition-colors"
                >
                  info@essencevault.com
                </a>
              </li>
              <li className="text-sm">
                <span className="block">Phone:</span>
                <a
                  href="tel:+18005551234"
                  className="hover:text-gold transition-colors"
                >
                  +1 (800) 555-1234
                </a>
              </li>
              <li className="text-sm mt-4">
                <Link
                  to="/contact"
                  className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-cream transition-colors inline-block mt-2"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-light mt-12 pt-8 text-sm text-cream/70">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} Christian Atanassov. All rights
              reserved.
            </p>
            <p className="mt-2 md:mt-0">
              <a href="#" className="hover:text-gold transition-colors">
                Privacy
              </a>{" "}
              |
              <a href="#" className="hover:text-gold transition-colors ml-2">
                Terms
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
