import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Colonne 1 : À propos */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">PHONESHOP</h3>
          <p className="text-sm leading-relaxed">Votre expert en téléphonie mobile. Smartphones certifiés, accessoires premium et SAV de confiance au Sénégal.</p>
        </div>

        {/* Colonne 2 : Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/products" className="hover:text-blue-400 transition">Nos Produits</Link></li>
            <li><Link to="/categories" className="hover:text-blue-400 transition">Catégories</Link></li>
            <li><Link to="/cart" className="hover:text-blue-400 transition">Mon Panier</Link></li>
            <li><Link to="/guide" className="hover:text-blue-400 transition">Guide d'achat</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : Contact & SAV */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact & SAV</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> Dakar, Sénégal</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-500" /> +221 78 112 87 07</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-500" /> contact@phoneshop.sn</li>
            <li className="flex items-center gap-2 text-green-400 mt-2"><ShieldCheck className="w-4 h-4" /> Garantie 12 mois</li>
          </ul>
        </div>

        {/* Colonne 4 : Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-3">Recevez nos offres flash en avant-première.</p>
          <div className="flex">
            <input type="email" placeholder="Votre email" className="w-full px-3 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            <button className="bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-800 transition">OK</button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
        © {new Date().getFullYear()} PhoneShop. Tous droits réservés.
      </div>
    </footer>
  );
}