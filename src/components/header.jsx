import {
  ShoppingBag,
  Heart,
  User,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ use Link for SPA navigation

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // Category data
  const categories = [
    {
      name: "Earrings",
      items: [
        "Stud Earrings",
        "Hoop Earrings",
        "Drop Earrings",
        "Statement Earrings",
        "Ear Cuffs",
      ],
    },
    {
      name: "Necklaces",
      items: [
        "Pendant Necklaces",
        "Choker Necklaces",
        "Bib Necklaces",
        "Layered Necklaces",
        "Chain Necklaces",
      ],
    },
    {
      name: "Bracelets",
      items: [
        "Chain Bracelets",
        "Bangle Bracelets",
        "Cuff Bracelets",
        "Charm Bracelets",
        "Tennis Bracelets",
      ],
    },
    {
      name: "Rings",
      items: [
        "Solitaire Rings",
        "Stackable Rings",
        "Statement Rings",
        "Band Rings",
        "Cocktail Rings",
      ],
    },
    {
      name: "Collections",
      items: [
        "New Arrivals",
        "Best Sellers",
        "Sale",
        "Vintage Collection",
        "Limited Edition",
      ],
    },
  ];

  return (
    <header className="w-full border-b bg-white">
      {/* Top Banner with Marquee */}
      <div className="bg-black text-white text-xs sm:text-sm py-2 overflow-hidden relative">
        <div className="marquee-container whitespace-nowrap">
          <div className="marquee-content">
            <Link to="/offers/first-order" className="hover:text-yellow-400 transition mx-4 sm:mx-8">
              REGISTER TO ENJOY 10% OFF YOUR FIRST ONLINE ORDER
            </Link>
            <Link to="/offers/free-delivery" className="hover:text-yellow-400 transition mx-4 sm:mx-8">
              FREE DELIVERY FOR NEXT 3 ORDERS
            </Link>
            <Link to="/offers/most-loved" className="hover:text-yellow-400 transition mx-4 sm:mx-8">
              20% OFF MOST LOVED - NEW LINES ADDED
            </Link>
            <Link to="/offers/sale" className="hover:text-yellow-400 transition mx-4 sm:mx-8">
              UP TO 30% OFF EVERYTHING
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 relative">
        {/* Left side */}
        <div
          className={`flex items-center transition-all duration-300 ${
            isSearchOpen
              ? "opacity-0 -translate-x-4 pointer-events-none"
              : "opacity-100"
          }`}
        >
          {/* Mobile Hamburger */}
          <button
            className="lg:hidden mr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="nav-link">HOME</Link>

            {/* Category Dropdown */}
            <div className="relative group">
              <button
                className="nav-link flex items-center"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                onMouseEnter={() => setIsCategoryOpen(true)}
              >
                CATEGORIES
                {isCategoryOpen ? (
                  <ChevronUp className="ml-1 w-4 h-4" />
                ) : (
                  <ChevronDown className="ml-1 w-4 h-4" />
                )}
              </button>

              {/* Dropdown */}
              {isCategoryOpen && (
                <div
                  className="absolute left-0 top-full mt-0 w-screen max-w-5xl bg-white shadow-xl rounded-b-md border border-gray-200 z-50 py-6 px-8"
                  onMouseLeave={() => setIsCategoryOpen(false)}
                >
                  <div className="grid grid-cols-5 gap-8">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="border-r border-gray-100 last:border-r-0 pr-6 last:pr-0"
                      >
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2">
                          {category.name}
                        </h3>
                        <ul className="space-y-3">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                to={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                className="text-gray-600 hover:text-yellow-600 text-sm transition-colors block py-1"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/shop" className="nav-link">SHOP</Link>
            <Link to="/product" className="nav-link">PRODUCT</Link>
            <Link to="/pages" className="nav-link">PAGES</Link>
            <Link to="/blog" className="nav-link">BLOG</Link>
            <Link to="/contact" className="nav-link">CONTACT</Link>
          </nav>
        </div>

        {/* Center - Logo / Search */}
        <div className="flex-1 flex justify-center mx-4 relative">
          <Link
            to="/"
            className={`text-xl sm:text-2xl font-bold tracking-wide transition-all duration-300 ${
              isSearchOpen ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            OLIGHT
          </Link>

          {/* Search Bar */}
          <div
            className={`flex items-center w-full max-w-xl transition-all duration-300 absolute ${
              isSearchOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border-2 border-gray-200 rounded-full py-2 pl-5 pr-12 focus:outline-none focus:border-yellow-500 shadow-sm"
              />
              <X
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center">
          <div className="flex items-center space-x-4 sm:space-x-5">
            <Search
              className={`w-5 h-5 cursor-pointer hover:text-yellow-600 transition-all duration-300 ${
                isSearchOpen
                  ? "opacity-0 scale-95 pointer-events-none"
                  : "opacity-100 scale-100"
              }`}
              onClick={() => setIsSearchOpen(true)}
            />
            <div
              className={`flex items-center space-x-4 sm:space-x-5 transition-all duration-300 ${
                isSearchOpen ? "-translate-x-20" : "translate-x-0"
              }`}
            >
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
              <Heart className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
              <User className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-4 space-y-4">
          <Link to="/" className="block nav-link">HOME</Link>

          {/* Mobile Categories */}
          <div>
            <button
              className="flex items-center justify-between w-full nav-link"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              CATEGORIES
              {isCategoryOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {isCategoryOpen && (
              <div className="pl-4 mt-2 space-y-3">
                {categories.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                    <ul className="pl-4 space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            to={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-gray-600 hover:text-yellow-600 text-sm transition-colors block py-1"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/shop" className="block nav-link">SHOP</Link>
          <Link to="/product" className="block nav-link">PRODUCT</Link>
          <Link to="/pages" className="block nav-link">PAGES</Link>
          <Link to="/blog" className="block nav-link">BLOG</Link>
          <Link to="/contact" className="block nav-link">CONTACT</Link>
        </div>
      )}

      {/* Marquee CSS */}
      <style>{`
        .marquee-container { width: 100%; overflow: hidden; position: relative; }
        .marquee-content {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
          padding-right: 100%;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content:hover { animation-play-state: paused; }
        @media (max-width: 768px) { .marquee-content { animation-duration: 20s; } }
        @media (max-width: 480px) { .marquee-content { animation-duration: 15s; } }
      `}</style>
    </header>
  );
};

export default Header;
