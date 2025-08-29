import { ShoppingBag, Heart, User, Search, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // Category data similar to the reference website
  const categories = [
    {
      name: "Earrings",
      items: ["Stud Earrings", "Hoop Earrings", "Drop Earrings", "Statement Earrings", "Ear Cuffs"]
    },
    {
      name: "Necklaces",
      items: ["Pendant Necklaces", "Choker Necklaces", "Bib Necklaces", "Layered Necklaces", "Chain Necklaces"]
    },
    {
      name: "Bracelets",
      items: ["Chain Bracelets", "Bangle Bracelets", "Cuff Bracelets", "Charm Bracelets", "Tennis Bracelets"]
    },
    {
      name: "Rings",
      items: ["Solitaire Rings", "Stackable Rings", "Statement Rings", "Band Rings", "Cocktail Rings"]
    },
    {
      name: "Collections",
      items: ["New Arrivals", "Best Sellers", "Sale", "Vintage Collection", "Limited Edition"]
    }
  ];

  return (
    <header className="w-full border-b bg-white">
      {/* Top Banner with Marquee - Fixed implementation */}
      <div className="bg-black text-white text-xs sm:text-sm py-2 overflow-hidden relative">
        <div className="marquee-container whitespace-nowrap">
          <div className="marquee-content">
            <a href="/offers/first-order" className="hover:text-yellow-400 transition mx-4 sm:mx-8">
              REGISTER TO ENJOY 10% OFF YOUR FIRST ONLINE ORDER
            </a>
            <a href="/offers/free-delivery" className="hover:text-yellow-400 transition mx-4 sm:mx-8">
              FREE DELIVERY FOR NEXT 3 ORDERS
            </a>
            <a href="/offers/most-loved" className="hover:text-yellow-400 transition mx-4 sm:mx-8">
              20% OFF MOST LOVED - NEW LINES ADDED
            </a>
            <a href="/offers/sale" className="hover:text-yellow-400 transition mx-4 sm:mx-8">
              UP TO 30% OFF EVERYTHING
            </a>
            {/* Duplicated content for seamless loop */}
            <a href="/offers/first-order" className="hover:text-yellow-400 transition mx-4 sm:mx-8">
              REGISTER TO ENJOY 10% OFF YOUR FIRST ONLINE ORDER
            </a>
            <a href="/offers/free-delivery" className="hover:text-yellow-400 transition mx-4 sm:mx-8">
              FREE DELIVERY FOR NEXT 3 ORDERS
            </a>
            <a href="/offers/most-loved" className="hover:text-yellow-400 transition mx-4 sm:mx-8">
              20% OFF MOST LOVED - NEW LINES ADDED
            </a>
            <a href="/offers/sale" className="hover:text-yellow-400 transition mx-4 sm:mx-8">
              UP TO 30% OFF EVERYTHING
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 relative">
        {/* Left side - Menu button and navigation (visible when search is closed) */}
        <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'opacity-0 -translate-x-4 pointer-events-none' : 'opacity-100'}`}>
          {/* Mobile & Tablet Hamburger */}
          <button
            className="lg:hidden mr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Left - Nav Links (Hidden on Mobile & Tablet) */}
          <nav className="hidden lg:flex space-x-8">
            <a href="/" className="nav-link">HOME</a>
            
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
              
              {/* Category Dropdown Menu - Landscape Layout */}
              {isCategoryOpen && (
                <div 
                  className="absolute left-0 top-full mt-0 w-screen max-w-5xl bg-white shadow-xl rounded-b-md border border-gray-200 z-50 py-6 px-8"
                  onMouseLeave={() => setIsCategoryOpen(false)}
                >
                  <div className="grid grid-cols-5 gap-8">
                    {categories.map((category, index) => (
                      <div key={index} className="border-r border-gray-100 last:border-r-0 pr-6 last:pr-0">
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2">{category.name}</h3>
                        <ul className="space-y-3">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a 
                                href={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-gray-600 hover:text-yellow-600 text-sm transition-colors block py-1"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <a href="/shop" className="nav-link">SHOP</a>
            <a href="/product" className="nav-link">PRODUCT</a>
          </nav>
        </div>

        {/* Center area - either logo or search bar */}
        <div className="flex-1 flex justify-center mx-4">
          {/* Logo (visible when search is closed) */}
          <h1 className={`text-xl sm:text-2xl font-bold tracking-wide transition-all duration-300 absolute left-1/2 transform -translate-x-1/2 ${isSearchOpen ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            OLIGHT
          </h1>

          {/* Search Bar (visible when search is open) */}
          <div className={`flex items-center w-full max-w-xl transition-all duration-300 ${isSearchOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
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

        {/* Right side - Icons and additional navigation */}
        <div className="flex items-center">
          {/* Additional nav links (visible when search is closed) */}
          <nav className={`hidden lg:flex space-x-8 mr-4 transition-all duration-300 ${isSearchOpen ? 'opacity-0 translate-x-4 pointer-events-none' : 'opacity-100'}`}>
            <a href="/pages" className="nav-link">PAGES</a>
            <a href="/blog" className="nav-link">BLOG</a>
            <a href="/contact" className="nav-link">CONTACT</a>
          </nav>

          {/* Right - Icons */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            {/* Search icon (only visible when search is closed) */}
            <Search 
              className={`w-5 h-5 cursor-pointer hover:text-yellow-600 transition-all duration-300 ${isSearchOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`} 
              onClick={() => setIsSearchOpen(true)}
            />
            
            {/* Other icons (always visible but move when search is open) */}
            <div className={`flex items-center space-x-4 sm:space-x-5 transition-all duration-300 ${isSearchOpen ? '-translate-x-20' : 'translate-x-0'}`}>
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
              <Heart className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
              <User className="w-5 h-5 cursor-pointer hover:text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-4 space-y-4">
          <a href="/" className="block nav-link">HOME</a>
          
          {/* Mobile Category Accordion */}
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
                          <a 
                            href={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-gray-600 hover:text-yellow-600 text-sm transition-colors block py-1"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <a href="/shop" className="block nav-link">SHOP</a>
          <a href="/product" className="block nav-link">PRODUCT</a>
          <a href="/pages" className="block nav-link">PAGES</a>
          <a href="/blog" className="block nav-link">BLOG</a>
          <a href="/contact" className="block nav-link">CONTACT</a>
        </div>
      )}

      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .marquee-content {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
          padding-right: 100%; /* Ensure content stays on screen during loop */
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Pause animation on hover */
        .marquee-content:hover {
          animation-play-state: paused;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .marquee-content {
            animation-duration: 20s;
          }
        }
        
        @media (max-width: 480px) {
          .marquee-content {
            animation-duration: 15s;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;