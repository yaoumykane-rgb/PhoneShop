// components/CategoryList.jsx
// Grille de marques (catégories)

import CategoryCard from "./CategoryCard";

export default function CategoryList({ brands }) {
  if (!brands || brands.length === 0) {
    return <p className="text-neutral-500">Aucune marque disponible.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {brands.map((brand) => (
        <CategoryCard key={brand.id} brand={brand} />
      ))}
    </div>
  );
}
