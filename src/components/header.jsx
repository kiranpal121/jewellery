import { ShoppingBag, Heart, User, Search, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      {/* Top Banner with Marquee */}
      <div className="bg-black text-white text-xs sm:text-sm py-2 overflow-hidden relative">
        <div className="marquee flex whitespace-nowrap animate-marquee">
          <div className="flex space-x-8 sm:space-x-16 px-4">
            <a href="/offers/first-order" className="hover:text-yellow-400 transition">
              REGISTER TO ENJOY 10% OFF YOUR FIRST ONLINE ORDER
            </a>
            <a href="/offers/free-delivery" className="hover:text-yellow-400 transition">
              FREE DELIVERY FOR NEXT 3 ORDERS
            </a>
            <a href="/offers/most-loved" className="hover:text-yellow-400 transition">
              20% OFF MOST LOVED - NEW LINES ADDED
            </a>
            <a href="/offers/sale" className="hover:text-yellow-400 transition">
              UP TO 30% OFF EVERYTHING
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 relative">
        {/* Left - Nav Links (Hidden on Mobile & Tablet) */}
        <nav className="hidden lg:flex space-x-8">
          <a href="/" className="nav-link">HOME</a>
          <a href="/shop" className="nav-link">SHOP</a>
          <a href="/categories" className="nav-link">CATEGORIES</a>
          <a href="/product" className="nav-link">PRODUCT</a>
          <a href="/pages" className="nav-link">PAGES</a>
          <a href="/blog" className="nav-link">BLOG</a>
          <a href="/contact" className="nav-link">CONTACT</a>
        </nav>

        {/* Mobile & Tablet Hamburger */}
        <button
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Center - Logo */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide absolute left-1/2 transform -translate-x-1/2">
          OLIGHT
        </h1>

        {/* Right - Icons */}
        <div className="flex space-x-4 sm:space-x-5">
          <Search className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
          <Heart className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
          <User className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-4 space-y-4">
          <a href="/" className="block nav-link">HOME</a>
          <a href="/shop" className="block nav-link">SHOP</a>
          <a href="/categories" className="block nav-link">CATEGORIES</a>
          <a href="/product" className="block nav-link">PRODUCT</a>
          <a href="/pages" className="block nav-link">PAGES</a>
          <a href="/blog" className="block nav-link">BLOG</a>
          <a href="/contact" className="block nav-link">CONTACT</a>
        </div>
      )}
    </header>
  );
};

export default Header;
