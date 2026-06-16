import { Link, useLocation } from "react-router";
import { Home, Building2, Info, Sparkles } from "lucide-react";

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl shadow-md">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl text-[#111827]">SmartPG</span>
              <div className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 rounded-full text-xs text-[#2563EB]">
                <Sparkles className="w-3 h-3" />
                <span>AI Powered</span>
              </div>
            </div>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`flex items-center gap-2 transition-all ${
                isActive("/") 
                  ? "text-[#2563EB]" 
                  : "text-[#6B7280] hover:text-[#2563EB]"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
              {isActive("/") && <div className="absolute bottom-0 h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full" />}
            </Link>
            <Link 
              to="/browse" 
              className={`flex items-center gap-2 transition-all ${
                isActive("/browse") 
                  ? "text-[#2563EB]" 
                  : "text-[#6B7280] hover:text-[#2563EB]"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Browse PG</span>
            </Link>
            <Link 
              to="/about" 
              className={`flex items-center gap-2 transition-all ${
                isActive("/about") 
                  ? "text-[#2563EB]" 
                  : "text-[#6B7280] hover:text-[#2563EB]"
              }`}
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
            
            <Link 
              to="/browse"
              className="px-5 py-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              Find PG
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}