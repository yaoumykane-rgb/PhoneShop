import { Link } from "react-router-dom";
import "./CategoryCard.css";
import { formatFCFA } from "../data/iphones.js";
import { withImageFallback } from "../utils/gsmImage.js";

/**
 * CategoryCard — carte réutilisable.
 *
 * variant="category" (page /categories) :
 *   { id, name, year, tagline, finishName, finish, image }, count
 *
 * variant="phone" (page /categories/:id, résultats de recherche) :
 *   { id, name, storage, price, inStock, rating, image }, seriesName?
 *   onSelect?: (item) => void — ouvre la fiche détaillée du modèle
 */
export default function CategoryCard({ variant = "category", item, count, seriesName, onSelect }) {
  if (variant === "category") {
    return (
      <Link to={`/categories/${item.id}`} className="category-card category-card--category">
        <div className="category-card__media" style={{ "--finish": item.finish }}>
          <img src={item.image} alt="" loading="lazy" onError={withImageFallback} />
          <div className="category-card__tint" />
        </div>
        <div className="category-card__body">
          <div className="category-card__title-row">
            <h3>{item.name}</h3>
            <span className="category-card__year">{item.year}</span>
          </div>
          <p>{item.tagline}</p>
          <div className="category-card__meta">
            <span className="category-card__swatch" style={{ background: item.finish }} />
            <span>{item.finishName}</span>
            {typeof count === "number" && <span className="category-card__count">{count} modèles</span>}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article className="category-card category-card--phone">
      <button
        type="button"
        className="category-card__media category-card__media--phone category-card__media--clickable"
        onClick={() => onSelect && onSelect(item)}
        aria-label={`Voir les détails de ${item.name}`}
      >
        <img src={item.image} alt={item.name} loading="lazy" onError={withImageFallback} />
        {!item.inStock && <span className="category-card__badge">Rupture</span>}
      </button>
      <div className="category-card__body">
        {seriesName && <span className="category-card__eyebrow">{seriesName}</span>}
        <h3>{item.name}</h3>
        <p>{item.storage}</p>
        <div className="category-card__footer">
          <span className="category-card__price">{formatFCFA(item.price)}</span>
          <span className="category-card__rating" aria-label={`Note ${item.rating} sur 5`}>
            ★ {item.rating}
          </span>
        </div>
        <button type="button" className="category-card__cta" onClick={() => onSelect && onSelect(item)}>
          Voir les détails
        </button>
      </div>
    </article>
  );
}
