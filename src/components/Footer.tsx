import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-evergreen-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-evergreen-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">HE</span>
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold">Hotel Evergreen</h3>
                <p className="text-evergreen-200">Luxury Stay in Nature's Heart</p>
              </div>
            </div>
            <p className="text-evergreen-200 mb-4 max-w-md">
              Experience the perfect blend of luxury and nature at Hotel Evergreen, 
              located in the serene Valmiki Nagar, West Champaran, Bihar. 
              Gateway to Valmiki Tiger Reserve.
            </p>
            <div className="flex space-x-4">
              <Button
                asChild
                variant="outline"
                className="border-evergreen-400 text-evergreen-400 hover:bg-evergreen-800"
              >
                <a href="tel:7782935050" className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>7782935050</span>
                </a>
              </Button>
              <Button
                asChild
                className="bg-evergreen-600 hover:bg-evergreen-700"
              >
                <a 
                  href="https://wa.me/7782935050" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-evergreen-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-evergreen-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/rooms" className="text-evergreen-200 hover:text-white transition-colors">Rooms</Link></li>
              <li><Link to="/dining" className="text-evergreen-200 hover:text-white transition-colors">Dining</Link></li>
              <li><Link to="/gallery" className="text-evergreen-200 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-evergreen-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-evergreen-400 mt-0.5" />
                <div>
                  <p className="text-evergreen-200">Valmiki Nagar</p>
                  <p className="text-evergreen-200">West Champaran, Bihar</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-evergreen-400" />
                <p className="text-evergreen-200">+91 7782935050</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-evergreen-800 mt-8 pt-8 text-center">
          <p className="text-evergreen-200">
            © 2024 Hotel Evergreen. All rights reserved. | Valmiki Nagar, West Champaran, Bihar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
