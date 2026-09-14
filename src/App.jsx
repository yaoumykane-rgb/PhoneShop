import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Composants placeholder pour les pages non encore créées
const Placeholder = ({ title }) => (
  <div className="max-w-7xl mx-auto px-4 py-16 text-center">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
    <p className="text-gray-600">Cette page est en cours de développement.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Route principale */}
          <Route path="/" element={<Home />} />

          {/* Routes définies pour PhoneShop */}
          <Route path="/products" element={<Placeholder title="Nos Produits" />} />
          <Route path="/categories" element={<Placeholder title="Catégories" />} />
          <Route path="/cart" element={<Placeholder title="Mon Panier" />} />
          <Route path="/login" element={<Placeholder title="Connexion" />} />

          {/* Route Guide (ton travail) */}
          <Route path="/guide" element={<Placeholder title="Guide d'achat" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;