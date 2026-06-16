import { Link } from "react-router";
import { Building2, Mail, Phone, MapPin, Star } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br  from-[#111827] to-[#1f2937] text-white mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8 text-[#2563EB]" />
              <span className="text-xl">SmartPG</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              AI-powered PG recommendation system helping you find your perfect home with smart technology.
            </p>
            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              <Star className="w-5 h-5 fill-yellow-400" />
              <span className="text-white">4.8/5</span>
            </div>
            <p className="text-gray-400 text-sm">User Satisfaction</p>
          </div>

          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/browse" className="text-gray-400 hover:text-white transition-colors text-sm">
                Browse PG
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@smartpg.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 7011738397</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Hisar → Haryana → India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-[#2563EB] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-[#2563EB] rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-[#2563EB] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-[#2563EB] rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 SmartPG. All rights reserved. Powered by AI Technology.</p>
        </div>
      </div>
    </footer>
  );
}
