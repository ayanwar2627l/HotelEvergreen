import { Link } from "react-router-dom";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-evergreen-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-evergreen-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">HE</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-playfair font-bold">
                  Hotel Evergreen
                </h3>
                <p className="text-evergreen-200 text-sm">
                  Luxury Stay in Nature's Heart
                </p>
              </div>
            </div>
            <p className="text-evergreen-200 mb-5 max-w-md text-sm sm:text-base leading-relaxed">
              Experience the perfect blend of luxury and nature at Hotel
              Evergreen, located in the serene Valmiki Nagar, West Champaran,
              Bihar. Gateway to Valmiki Tiger Reserve.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:7782935050"
                className="inline-flex items-center space-x-2 border border-evergreen-400 text-evergreen-300 hover:bg-evergreen-800 hover:text-white px-4 py-2 rounded-md text-sm transition-colors min-h-[40px]"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>7782935050</span>
              </a>
              <a
                href="https://wa.me/7782935050"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-evergreen-600 hover:bg-evergreen-700 text-white px-4 py-2 rounded-md text-sm transition-colors min-h-[40px]"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/rooms", label: "Rooms" },
                { to: "/dining", label: "Dining" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-evergreen-200 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-evergreen-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-evergreen-200 text-sm">Valmiki Nagar</p>
                  <p className="text-evergreen-200 text-sm">West Champaran, Bihar</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-evergreen-400 flex-shrink-0" />
                <a
                  href="tel:7782935050"
                  className="text-evergreen-200 hover:text-white text-sm transition-colors"
                >
                  +91 7782935050
                </a>
              </div>
              <div className="mt-4">
                <p className="text-evergreen-300 text-xs uppercase tracking-wide font-semibold mb-1">Hours</p>
                <p className="text-evergreen-200 text-sm">24/7 Reception</p>
                <p className="text-evergreen-200 text-sm">Restaurant: 7 AM – 11 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-evergreen-800 mt-8 pt-6 text-center">
          <p className="text-evergreen-300 text-sm">
            © {new Date().getFullYear()} Hotel Evergreen. All rights reserved. | Valmiki Nagar, West
            Champaran, Bihar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
