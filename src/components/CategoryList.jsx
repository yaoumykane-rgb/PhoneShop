import { useState } from "react";
import CategoryCard from "./CategoryCard.jsx";
import ProductModal from "./ProductModal.jsx";
import { getSeriesById } from "../data/series.js";
import "./CategoryList.css";

/**
 * CategoryList — grille de CategoryCard.
 * Props:
 *  - items: array
 *  - variant: "category" | "phone"
 *  - getCount?: (item) => number       nombre de modèles, utile en variant="category"
 *  - getSeriesName?: (item) => string  utile en variant="phone" pour afficher la série
 *  - emptyLabel?: string
 */
export default function CategoryList({ items, variant = "category", getCount, getSeriesName, emptyLabel }) {
  const [selected, setSelected] = useState(null);

  if (!items || items.length === 0) {
    return (
      <div className="category-list__empty">
        <p>{emptyLabel || "Aucun résultat pour ces critères."}</p>
        <span>Essayez d'élargir votre recherche ou de réinitialiser les filtres.</span>
      </div>
    );
  }

  const selectedSeries = selected ? getSeriesById(selected.seriesId) : null;

  return (
    <>
      <div className={`category-list category-list--${variant}`}>
        {items.map((item) => (
          <CategoryCard
            key={item.id}
            variant={variant}
            item={item}
            count={getCount ? getCount(item) : undefined}
            seriesName={getSeriesName ? getSeriesName(item) : undefined}
            onSelect={variant === "phone" ? setSelected : undefined}
          />
        ))}
      </div>

      {selected && (
        <ProductModal item={selected} seriesInfo={selectedSeries} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
