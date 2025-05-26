
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-evergreen-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">HE</span>
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-evergreen-800">Hotel Evergreen</h1>
              <p className="text-sm text-gray-600">Valmiki Nagar, Bihar</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors hover:text-evergreen-600 ${
                  isActive(item.href) 
                    ? "text-evergreen-600 border-b-2 border-evergreen-600 pb-1" 
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="group relative overflow-hidden border-2 border-green-500 text-green-600 hover:text-white bg-white hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 px-6 py-3 font-semibold"
            >
              <a href="tel:7782935050" className="flex items-center space-x-2">
                <Phone className="w-5 h-5 animate-pulse" />
                <span className="relative z-10">Call Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Button>
            <Button
              asChild
              className="bg-evergreen-600 hover:bg-evergreen-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-6 py-3 font-semibold"
            >
              <a 
                href="https://wa.me/7782935050" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-evergreen-600 ${
                    isActive(item.href) ? "text-evergreen-600" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-green-500 text-green-600 hover:text-white bg-white hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-xl py-3 font-semibold"
                >
                  <a href="tel:7782935050" className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 animate-pulse" />
                    <span className="relative z-10">Call Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-evergreen-600 hover:bg-evergreen-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl py-3 font-semibold"
                >
                  <a 
                    href="https://wa.me/7782935050" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Book Now
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
