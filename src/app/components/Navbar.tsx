import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  Home,
  Building2,
  Info,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Browse PG",
      path: "/browse",
      icon: Building2,
    },
    {
      name: "About",
      path: "/about",
      icon: Info,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl shadow-md">
              <Building2 className="w-5 h-5 text-white" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl text-[#111827] font-semibold">
                SmartPG
              </span>

              <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 rounded-full text-xs text-[#2563EB]">
                <Sparkles className="w-3 h-3" />
                AI Powered
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden min-[760px]:flex items-center gap-8">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 transition ${isActive(item.path)
                    ? "text-[#2563EB]"
                    : "text-gray-600 hover:text-[#2563EB]"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}

            <Link
              to="/browse"
              className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:scale-105 transition"
            >
              Find PG
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="min-[760px]:hidden"
          >
            <Menu className="w-7 h-7 text-[#2563EB]" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${open
          ? "opacity-100 visible"
          : "opacity-0 invisible"
          }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
              <Building2 className="w-5 h-5 text-white" />
            </div>

            <span className="text-xl font-semibold">
              SmartPG
            </span>
          </div>

          <button onClick={() => setOpen(false)}>
            <X className="w-7 h-7 text-gray-700" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col mt-8 px-6 gap-6">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-4 text-lg p-4 rounded-xl transition ${isActive(item.path)
                  ? "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white"
                  : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <Icon className="w-6 h-6" />
                {item.name}
              </Link>
            );
          })}

          <Link
            to="/browse"
            onClick={() => setOpen(false)}
            className="mt-8 py-4 rounded-xl text-center text-white font-medium bg-gradient-to-r from-[#2563EB] to-[#7C3AED]"
          >
            Find PG
          </Link>
        </div>
      </div>
    </>
  );
}