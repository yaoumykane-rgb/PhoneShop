import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Truck, BadgePercent, Star, Smartphone, Headphones, 
  ArrowRight, CheckCircle2, Zap, ShoppingCart, Heart, Clock, Award 
} from 'lucide-react';

export default function Home() {
  // Données produits avec de VRAIES images (Unsplash) pour un rendu pro
  const produitsPhares = [
    { 
      id: 1, 
      nom: 'iPhone 15 Pro Max', 
      marque: 'Apple', 
      prix: '950 000 FCFA', 
      ancienPrix: '1 100 000 FCFA', 
      badge: '-14%', 
      img: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500&auto=format&fit=crop&q=60',
      note: 4.9 
    },
    { 
      id: 2, 
      nom: 'Galaxy S24 Ultra', 
      marque: 'Samsung', 
      prix: '780 000 FCFA', 
      ancienPrix: '900 000 FCFA', 
      badge: 'NEW', 
      img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=60',
      note: 4.8 
    },
    { 
      id: 3, 
      nom: 'AirPods Pro 2', 
      marque: 'Apple', 
      prix: '180 000 FCFA', 
      badge: 'TOP', 
      img: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60',
      note: 5.0 
    },
    { 
      id: 4, 
      nom: 'Galaxy Watch 6', 
      marque: 'Samsung', 
      prix: '145 000 FCFA', 
      ancienPrix: '180 000 FCFA', 
      badge: '-19%', 
      img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60',
      note: 4.7 
    },
  ];

  const marques = ['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Oppo', 'Realme', 'Sony', 'JBL'];

  return (
    <div className="overflow-hidden bg-white">
      
      {/* ==================== BANDEAU PROMO TOP ==================== */}
      <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 text-white py-2.5 px-4 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          LIVRAISON GRATUITE à Dakar pour toute commande &gt; 50 000 FCFA | Code: <span className="font-bold bg-white/20 px-2 py-0.5 rounded mx-1">PROMO2026</span>
        </span>
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-gray-900 text-white py-20 md:py-32 px-4 overflow-hidden">
        {/* Effets de fond subtils et élégants */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-200">Nouveautés 2026 en stock</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              LE MEILLEUR DE LA <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">TECHNOLOGIE</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Smartphones neufs et reconditionnés certifiés. Garantie 12 mois, livraison rapide et paiement mobile sécurisé au Sénégal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/products" className="group bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-1">
                Découvrir les produits
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/guide" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
                Guide d'achat
              </Link>
            </div>

            {/* Stats de confiance */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10 justify-center md:justify-start">
              <div><div className="text-2xl font-bold text-white">2500+</div><div className="text-xs text-gray-400 uppercase tracking-wide">Produits</div></div>
              <div><div className="text-2xl font-bold text-white">4.9/5</div><div className="text-xs text-gray-400 uppercase tracking-wide">Avis clients</div></div>
              <div><div className="text-2xl font-bold text-white">24h</div><div className="text-xs text-gray-400 uppercase tracking-wide">Livraison</div></div>
            </div>
          </div>

          {/* Visuel Hero avec vraie image */}
          <div className="relative hidden md:flex justify-center items-center z-10">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&auto=format&fit=crop&q=80" 
                alt="Smartphone Premium" 
                className="relative rounded-3xl shadow-2xl border border-white/10 w-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Badge flottant */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-sm">Garantie 12 mois</div>
                  <div className="text-xs text-gray-500">Sur tous nos appareils</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BANDEAU MARQUES ==================== */}
      <section className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Nos marques partenaires</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {marques.map((m, i) => (
              <span key={i} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AVANTAGES ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir PhoneShop ?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">La référence de la téléphonie mobile, alliant qualité premium et service de proximité.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, titre: 'Garantie 12 Mois', desc: 'Tous nos appareils sont testés, certifiés et garantis avec un SAV réactif.', color: 'blue' },
              { icon: Truck, titre: 'Livraison Express', desc: 'Partout au Sénégal en 24h-48h. Paiement à la livraison disponible.', color: 'green' },
              { icon: BadgePercent, titre: 'Meilleurs Prix', desc: 'Nous alignons nos tarifs sur le marché pour vous garantir le meilleur deal.', color: 'purple' },
            ].map((item, i) => (
              <div key={i} className="group bg-gray-50 hover:bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`inline-flex p-4 rounded-2xl bg-${item.color}-100 text-${item.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.titre}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CATÉGORIES ==================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Explorez nos univers</h2>
              <p className="text-gray-500">Trouvez l'appareil qui correspond à vos besoins</p>
            </div>
            <Link to="/categories" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group">
              Voir toutes les catégories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { nom: 'Apple iPhone', desc: 'La référence du smartphone premium', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=60', color: 'from-gray-800 to-black' },
              { nom: 'Samsung Galaxy', desc: 'L\'innovation Android à l\'état pur', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=60', color: 'from-blue-700 to-blue-900' },
              { nom: 'Accessoires', desc: 'Coques, écouteurs, chargeurs rapides', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60', color: 'from-purple-700 to-pink-700' },
            ].map((cat, i) => (
              <Link to="/categories" key={i} className="group relative overflow-hidden rounded-3xl h-80 shadow-lg hover:shadow-2xl transition-all duration-500">
                <img src={cat.img} alt={cat.nom} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                <div className="absolute bottom-0 left-0 p-8 text-white z-10">
                  <h3 className="text-2xl font-bold mb-2">{cat.nom}</h3>
                  <p className="text-white/80 mb-4">{cat.desc}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    Découvrir <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRODUITS PHARES ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Les Incontournables</h2>
            <p className="text-gray-500">Nos meilleures ventes du moment, sélectionnées pour vous</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {produitsPhares.map((p) => (
              <div key={p.id} className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image et Badge */}
                <div className="relative bg-gray-50 p-6 flex items-center justify-center h-64 overflow-hidden">
                  <img src={p.img} alt={p.nom} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  
                  <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm ${
                    p.badge === 'NEW' ? 'bg-green-100 text-green-700' :
                    p.badge === 'TOP' ? 'bg-purple-100 text-purple-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {p.badge}
                  </span>
                  
                  {/* Bouton favori au survol */}
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-red-50 hover:text-red-500">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Infos */}
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{p.note}</span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">{p.marque}</p>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-blue-600 transition-colors">{p.nom}</h3>
                  
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="text-xl font-bold text-gray-900">{p.prix}</span>
                    {p.ancienPrix && <span className="text-sm text-gray-400 line-through">{p.ancienPrix}</span>}
                  </div>
                  
                  <button className="w-full bg-gray-900 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300">
              Voir tous les produits <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== CONFIANCE & PAIEMENT ==================== */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Award, text: '100% Authentique', sub: 'Produits certifiés' },
              { icon: Clock, text: 'Support 7j/7', sub: 'De 8h à 20h' },
              { icon: Truck, text: 'Retour gratuit', sub: 'Sous 14 jours' },
              { icon: ShieldCheck, text: 'Paiement sécurisé', sub: 'Wave, OM, CB' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="font-bold text-gray-900 mb-1">{item.text}</div>
                <div className="text-sm text-gray-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== NEWSLETTER ==================== */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ne manquez aucune offre</h2>
          <p className="text-gray-400 mb-8 text-lg">Inscrivez-vous pour recevoir nos promotions exclusives et les nouveautés en avant-première.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="flex-1 px-5 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
            />
            <button className="bg-blue-600 hover:bg-blue-500 font-bold px-8 py-4 rounded-xl transition-colors duration-300 shadow-lg shadow-blue-600/20">
              S'inscrire
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-green-500" /> Désinscription possible à tout moment.
          </p>
        </div>
      </section>
    </div>
  );
}