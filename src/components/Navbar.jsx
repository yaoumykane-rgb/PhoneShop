import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, Smartphone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-700">
            <Smartphone className="w-7 h-7" />
            PHONESHOP
          </Link>

          {/* Liens Desktop */}
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <Link to="/" className="hover:text-blue-700 transition">Accueil</Link>
            <Link to="/products" className="hover:text-blue-700 transition">Produits</Link>
            <Link to="/categories" className="hover:text-blue-700 transition">Catégories</Link>
            <Link to="/guide" className="hover:text-blue-700 transition">Guide</Link>
          </div>

          {/* Icônes */}
          <div className="flex items-center space-x-5 text-gray-600">
            <Search className="w-5 h-5 cursor-pointer hover:text-blue-700 transition" />
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-700 transition" />
              <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </Link>
            <Link to="/login">
              <User className="w-5 h-5 cursor-pointer hover:text-blue-700 transition" />
            </Link>
            <Menu className="w-6 h-6 md:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}