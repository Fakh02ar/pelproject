import { useState, useRef, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.avif';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const searchRef = useRef(null);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#2f3136] text-white py-1 px-4 xl:px-[40px] shadow-md">
        <div className="relative flex items-center justify-between max-w-[1200px] mx-auto h-16">
          <div className="flex items-center space-x-4 xl:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button onClick={() => setIsSearchOpen(true)}>
              <Search className="w-5 h-5" />
            </button>
          </div>

          <div className="xl:w-[50%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:static xl:translate-x-0 xl:translate-y-0">
            <Link to="/">
              <img src={logo} alt="PEL Logo" className="w-12 h-12 rounded-full border-2 border-white" />
            </Link>
          </div>

          <div className="flex items-center space-x-4 xl:hidden">
            <Link to="/login">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9.969 9.969 0 0112 15c2.21 0 4.243.722 5.879 1.938M15 11a3 3 0 10-6 0 3 3 0 006 0z" />
              </svg>
            </Link>
            <div className="relative">
              <button onClick={() => {
                setIsSearchOpen(false);
                setIsCartOpen(true);
              }}>
                <ShoppingCart className="w-5 h-5 cursor-pointer" />
              </button>
              <span className="absolute -top-2 -right-3 bg-white text-black text-xs rounded-full px-1">0</span>
            </div>
          </div>

          <nav className="hidden xl:flex items-center justify-between w-full">
            <div className="flex space-x-8">
              <Link to="/home" className="hover:text-gray-300 hover:border-b">Home</Link>
              <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link to="/shop" className="hover:text-gray-300 hover:border-b">Shop</Link>
              </div>
              <Link to="/blog" className="hover:text-gray-300 hover:border-b">Blogs</Link>
              <Link to="/about" className="hover:text-gray-300 hover:border-b">About PEL</Link>
              <Link to="/contact" className="hover:text-gray-300 hover:border-b">Contact Us</Link>
            </div>

            <div className="flex items-center space-x-6">
              <button onClick={() => setIsSearchOpen(true)} className="hover:text-gray-300 cursor-pointer">
                Search
              </button>
              <Link to="/login" className="hover:text-gray-300">Login</Link>
              <div className="relative">
                <button onClick={() => {
                  setIsSearchOpen(false);
                  setIsCartOpen(true);
                }} className="hover:text-gray-300 cursor-pointer">
                  Cart
                </button>
                <span className="absolute -top-2 -right-3 bg-white text-black text-xs rounded-full px-1">0</span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-width Shop Dropdown */}
      {showDropdown && (
    <div
      className="absolute top-[64px] left-0 right-0 bg-white text-black py-8 px-16 shadow-xl z-40"
      onMouseEnter={() => setShowDropdown(true)}  // Keep it open when mouse enters the dropdown
      onMouseLeave={() => setShowDropdown(false)} // Close when mouse leaves the dropdown
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-2 text-[#2f3136]">Refrigerators</h4>
          <ul className="space-y-1">
            <li><Link to="/shop/refrigerators/single-door" className="hover:text-[#007EC6]">Single Door</Link></li>
            <li><Link to="/shop/refrigerators/double-door" className="hover:text-[#007EC6]">Double Door</Link></li>
            <li><Link to="/shop/refrigerators/side-by-side" className="hover:text-[#007EC6]">Side-by-Side</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-[#2f3136]">Washing Machines</h4>
          <ul className="space-y-1">
            <li><Link to="/shop/washing/fully-auto" className="hover:text-[#007EC6]">Fully Automatic</Link></li>
            <li><Link to="/shop/washing/semi-auto" className="hover:text-[#007EC6]">Semi Automatic</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-[#2f3136]">Air Conditioners</h4>
          <ul className="space-y-1">
            <li><Link to="/shop/ac/split" className="hover:text-[#007EC6]">Split AC</Link></li>
            <li><Link to="/shop/ac/inverter" className="hover:text-[#007EC6]">Inverter AC</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-[#2f3136]">Microwave Ovens</h4>
          <ul className="space-y-1">
            <li><Link to="/shop/microwave/solo" className="hover:text-[#007EC6]">Solo</Link></li>
            <li><Link to="/shop/microwave/convection" className="hover:text-[#007EC6]">Convection</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-[#2f3136]">More Categories</h4>
          <ul className="space-y-1">
            <li><Link to="/shop/freezers" className="hover:text-[#007EC6]">Deep Freezers</Link></li>
            <li><Link to="/shop/ovens" className="hover:text-[#007EC6]">Electric Ovens</Link></li>
            <li><Link to="/shop/small-appliances" className="hover:text-[#007EC6]">Small Appliances</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )}


      {/* Search Panel */}
      <div
        ref={searchRef}
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-[40%] max-w-[480px] bg-white text-black shadow-lg transform ${
          isSearchOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-4 px-6 border-b">
          <Search className="w-5 h-5 text-gray-500 absolute left-4" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full pl-10 pr-10 py-2 border-none outline-none text-lg"
            autoFocus
          />
          <button onClick={() => setIsSearchOpen(false)} aria-label="Close search">
            <X className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="p-4 text-gray-500">
          <p>Start typing to search...</p>
        </div>
      </div>

      {/* Cart Panel */}
      <div
        ref={cartRef}
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-[40%] max-w-[480px] bg-white text-black shadow-lg transform ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-4 px-6 border-b">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="w-6 h-6 text-black" />
            <h2 className="text-xl font-semibold">Cart</h2>
          </div>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-gray-700 mb-6 text-lg">Your cart is empty</p>
          <Link to="/shop" className="bg-[#007EC6] hover:bg-blue-700 text-white font-semibold py-4 px-10">
            START SHOPPING
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed flex-cols top-0 left-0 h-full w-64 bg-[#2f3136] text-white transform ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 z-50 lg:hidden`}>
        <div className="p-6 space-y-4 text-lg">
          {['home', 'shop', 'blog', 'about', 'contact'].map((route, i) => (
            <Link
              key={i}
              to={`/${route}`}
              onClick={() => setIsMenuOpen(false)}
              className="block"
            >
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
