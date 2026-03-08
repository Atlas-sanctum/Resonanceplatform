import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Root() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    { path: "/", label: "Overview" },
    { path: "/atmosphere-map", label: "Atmosphere Map" },
    { path: "/analytics", label: "Analytics" },
    { path: "/haptic-control", label: "Haptic Control" },
    { path: "/classroom", label: "Classroom" },
    { path: "/workplace", label: "Workplace" },
    { path: "/social-navigation", label: "Social Navigation" },
    { path: "/ethics", label: "Ethics & Privacy" },
    { path: "/vision", label: "Future Vision" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-light text-white tracking-wider">
              Resonance
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    location.pathname === route.path
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-white/60 hover:text-white"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
            <div className="px-4 py-2 space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                    location.pathname === route.path
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
