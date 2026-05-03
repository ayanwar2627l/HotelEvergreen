import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "Gallery", href: "/gallery" },
    { name: "Dining", href: "/dining" },
    { name: "Attractions", href: "/attractions" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 shadow-lg backdrop-blur-md"
          : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-evergreen-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg sm:text-xl">HE</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-playfair font-bold text-evergreen-800 leading-tight">
                Hotel Evergreen
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 hidden xs:block">Valmiki Nagar, Bihar</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-evergreen-600 whitespace-nowrap ${
                  isActive(item.href)
                    ? "text-evergreen-600 border-b-2 border-evergreen-600 pb-1"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Call Now Button */}
            <a
              href="tel:7782935050"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="bg-white/25 rounded-full p-0.5 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-white" fill="currentColor" />
              </div>
              <span className="uppercase tracking-wide">Call Now</span>
            </a>
            {/* Book Now Button */}
            <a
              href="https://wa.me/7782935050"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-evergreen-600 hover:bg-evergreen-700 text-white px-5 py-2.5 rounded-md font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile: Phone icon + Hamburger */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="tel:7782935050"
              className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full shadow-lg active:scale-95 transition-transform"
              aria-label="Call Hotel Evergreen"
            >
              <Phone className="w-4 h-4 text-white" fill="currentColor" />
            </a>
            <button
              className="p-2 rounded-md text-gray-700 hover:text-evergreen-600 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-1 pt-2 border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-3 rounded-lg font-medium transition-colors text-base ${
                  isActive(item.href)
                    ? "text-evergreen-600 bg-evergreen-50"
                    : "text-gray-700 hover:text-evergreen-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-3 px-2">
              <a
                href="tel:7782935050"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 px-6 rounded-full font-bold shadow-lg active:scale-95 transition-transform"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4 text-white" fill="currentColor" />
                <span className="uppercase tracking-wide text-sm">Call Now: 7782935050</span>
              </a>
              <a
                href="https://wa.me/7782935050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-evergreen-600 hover:bg-evergreen-700 text-white py-3 px-6 rounded-md font-semibold text-sm shadow-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
