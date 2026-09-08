// components/CategoryCard.jsx
// Carte cliquable représentant une marque (catégorie)

import { Link } from "react-router-dom";

export default function CategoryCard({ brand }) {
  return (
    <Link
      to={`/categories/${brand.id}`}
      className="flex flex-col items-center gap-3 rounded-xl border border-neutral-200 bg-white p-5 text-center transition hover:border-neutral-400 hover:shadow-sm"
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="h-16 w-16 object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div>
        <h3 className="font-medium text-neutral-900">{brand.name}</h3>
        <p className="text-sm text-neutral-500">
          {brand.phones.length} modèle{brand.phones.length > 1 ? "s" : ""}
        </p>
      </div>
    </Link>
  );
}
