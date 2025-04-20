import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const headerClass = isScrolled ? "bg-white shadow-md" : "bg-transparent";

  const textClass = isScrolled ? "text-charcoal" : "text-charcoal";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex w-full items-center justify-between">
          <Link to="/" className="flex items-center w-60">
            <img
              src="/chrisFinal.svg"
              className="w-48 object-cover"
              alt="ChrisLogo"
            />
            {/* <h1 className="font-serif text-2xl font-bold tracking-wider text-brown">
              Scent by <span className="text-gold">CA</span>
            </h1> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/collections"
              className={`${textClass} hover:text-gold transition-colors font-sans text-sm tracking-wide`}
            >
              COLLECTIONS
            </Link>
            <Link
              to="/bestsellers"
              className={`${textClass} hover:text-gold transition-colors font-sans text-sm tracking-wide`}
            >
              BESTSELLERS
            </Link>
            <Link
              to="/new-arrivals"
              className={`${textClass} hover:text-gold transition-colors font-sans text-sm tracking-wide`}
            >
              NEW ARRIVALS
            </Link>
            <Link
              to="/about"
              className={`${textClass} hover:text-gold transition-colors font-sans text-sm tracking-wide`}
            >
              ABOUT
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`${textClass} hover:text-gold transition-colors`}
            >
              <Search size={20} />
            </button>
            <Link
              to="/account"
              className={`${textClass} hover:text-gold transition-colors`}
            >
              <User size={20} />
            </Link>
            <Link
              to="/cart"
              className={`${textClass} hover:text-gold transition-colors relative`}
            >
              <ShoppingBag size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-charcoal"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-lg md:hidden"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/collections"
                className="text-charcoal hover:text-gold transition-colors font-sans text-sm tracking-wide py-2"
              >
                COLLECTIONS
              </Link>
              <Link
                to="/bestsellers"
                className="text-charcoal hover:text-gold transition-colors font-sans text-sm tracking-wide py-2"
              >
                BESTSELLERS
              </Link>
              <Link
                to="/new-arrivals"
                className="text-charcoal hover:text-gold transition-colors font-sans text-sm tracking-wide py-2"
              >
                NEW ARRIVALS
              </Link>
              <Link
                to="/about"
                className="text-charcoal hover:text-gold transition-colors font-sans text-sm tracking-wide py-2"
              >
                ABOUT
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
