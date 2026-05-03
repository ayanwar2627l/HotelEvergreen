import Header from "./Header";
import Footer from "./Footer";
import { PhoneCall } from "lucide-react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      
      {/* Floating Call Button */}
      <a
        href="tel:7782935050"
        className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[100] group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-tr from-green-600 to-emerald-400 text-white rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.5)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.8)] transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Call Hotel Evergreen"
      >
        <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60"></div>
        <div className="absolute inset-0 rounded-full border-2 border-white/40 scale-110 group-hover:scale-125 transition-transform duration-300"></div>
        <PhoneCall className="w-6 h-6 md:w-7 md:h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" />
      </a>
    </div>
  );
};

export default Layout;
