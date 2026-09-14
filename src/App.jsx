import { Routes, Route, Link } from "react-router-dom";
import Categories from "./pages/Categories.jsx";
import CategoryDetail from "./pages/CategoryDetail.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header__inner">
          <Link to="/categories" className="app-logo">
            <svg width="16" height="19" viewBox="0 0 16 19" fill="currentColor" aria-hidden="true">
              <path d="M13.2 6.4c-1 .05-2.15.7-2.85 1.55-.62.75-1.16 1.9-.96 3 1.1.08 2.24-.6 2.9-1.45.65-.8 1.1-1.9.9-3.1ZM16 13.6c-.45 1.05-.7 1.55-1.3 2.5-.85 1.3-2.05 2.9-3.55 2.95-1.3.05-1.65-.85-3.4-.85-1.76 0-2.15.83-3.4.87-1.4.05-2.5-1.4-3.35-2.7C-.85 13.6-.4 8.9 1.55 6.4c.95-1.2 2.35-1.95 3.65-1.95 1.35 0 2.2.9 3.35.9 1.1 0 1.8-.9 3.4-.9 1.05 0 2.3.55 3.15 1.55-.8.5-2.35 1.5-2.35 3.55 0 2.45 2.1 3.3 2.25 3.35Z"/>
            </svg>
            iPhone
          </Link>
          <nav className="app-nav">
            <Link to="/categories">Explorer</Link>
            <a href="#comparer">Comparer</a>
            <a href="#boutique">Boutique</a>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryDetail />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <div className="app-footer__inner">
          <span>Prix en FCFA, hors promotions. Disponibilité sujette à variation selon le stock à Dakar.</span>
        </div>
      </footer>
    </div>
  );
}
