import { ShoppingBag, Heart, User, Search, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

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
    <header className="w-full border-b bg-white relative">
      <div className="bg-black text-white text-xs sm:text-sm py-1 overflow-hidden relative">
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

      <div className="flex items-center justify-between px-4 sm:px-6 py-5 relative">
        <div
          className={`flex items-center transition-all duration-300 ${
            isSearchOpen
              ? "opacity-0 -translate-x-4 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <button
            className="lg:hidden mr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <nav className="hidden lg:flex space-x-6">
            <Link to="/" className="nav-link text-sm">HOME</Link>

            <div className="relative group">
              <button
                className="nav-link text-sm flex items-center"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                onMouseEnter={() => setIsCategoryOpen(true)}
              >
                CATEGORIES
                {isCategoryOpen ? (
                  <ChevronUp className="ml-1 w-3 h-3" />
                ) : (
                  <ChevronDown className="ml-1 w-3 h-3" />
                )}
              </button>

              {isCategoryOpen && (
                <div
                  className="absolute left-0 top-full mt-0 w-screen max-w-5xl bg-white shadow-xl rounded-b-md border border-gray-200 z-50 py-4 px-6"
                  onMouseLeave={() => setIsCategoryOpen(false)}
                >
                  <div className="grid grid-cols-5 gap-6">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="border-r border-gray-100 last:border-r-0 pr-4 last:pr-0"
                      >
                        <h3 className="font-semibold text-gray-900 mb-3 text-sm border-b border-gray-100 pb-1">
                          {category.name}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                to={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                className="text-gray-600 hover:text-yellow-600 text-xs transition-colors block py-0.5"
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

            <Link to="/shop" className="nav-link text-sm">SHOP</Link>
            <Link to="/product" className="nav-link text-sm">PRODUCT</Link>
            <Link to="/pages" className="nav-link text-sm">PAGES</Link>
            <Link to="/blog" className="nav-link text-sm">BLOG</Link>
            <Link to="/contact" className="nav-link text-sm">CONTACT</Link>
          </nav>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-4">
          <Link
            to="/"
            className={`text-lg sm:text-xl font-bold tracking-wide transition-all duration-300 block text-center ${
              isSearchOpen ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            OLIGHT
          </Link>

          <div
            className={`transition-all duration-300 absolute left-0 top-0 w-full ${
              isSearchOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-full py-1.5 pl-4 pr-10 focus:outline-none focus:border-yellow-500 shadow-sm text-sm"
              />
              <X
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Search
              className={`w-4 h-4 cursor-pointer hover:text-yellow-600 transition-all duration-300 ${
                isSearchOpen
                  ? "opacity-0 scale-95 pointer-events-none"
                  : "opacity-100 scale-100"
              }`}
             
              onClick={() => setIsSearchOpen(true)}
            />
            <div
              className={`flex items-center space-x-3 sm:space-x-4 transition-all duration-300 ${
                isSearchOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
              }`}
            >
              <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-yellow-600" />
              <Heart className="w-4 h-4 cursor-pointer hover:text-yellow-600" />
              <User className="w-4 h-4 cursor-pointer hover:text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-3 space-y-3">
          <Link to="/" className="block nav-link text-sm">HOME</Link>

          <div>
            <button
              className="flex items-center justify-between w-full nav-link text-sm"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              CATEGORIES
              {isCategoryOpen ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>

            {isCategoryOpen && (
              <div className="pl-3 mt-1 space-y-2">
                {categories.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">{category.name}</h3>
                    <ul className="pl-3 space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            to={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-gray-600 hover:text-yellow-600 text-xs transition-colors block py-0.5"
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

          <Link to="/shop" className="block nav-link text-sm">SHOP</Link>
          <Link to="/product" className="block nav-link text-sm">PRODUCT</Link>
          <Link to="/pages" className="block nav-link text-sm">PAGES</Link>
          <Link to="/blog" className="block nav-link text-sm">BLOG</Link>
          <Link to="/contact" className="block nav-link text-sm">CONTACT</Link>
        </div>
      )}

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
        .nav-link {
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #ca8a04;
        }
      `}</style>
    </header>
  );
};

export default Header;