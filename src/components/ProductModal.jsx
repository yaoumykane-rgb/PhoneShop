import { useEffect } from "react";
import "./ProductModal.css";
import { formatFCFA } from "../data/iphones.js";
import { withImageFallback } from "../utils/gsmImage.js";

/**
 * ProductModal — fiche détaillée d'un modèle (stockage, prix, note, stock…).
 * Props:
 *  - item: { id, name, storage, price, inStock, rating, image }
 *  - seriesInfo?: { name, year, finishName, finish }
 *  - onClose: () => void
 */
export default function ProductModal({ item, seriesInfo, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="product-modal__scrim" onClick={onClose}>
      <div
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Détails de ${item.name}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="product-modal__close" onClick={onClose} aria-label="Fermer">
          ×
        </button>

        <div className="product-modal__media">
          <img src={item.image} alt={item.name} onError={withImageFallback} />
        </div>

        <div className="product-modal__body">
          {seriesInfo && <span className="product-modal__eyebrow">{seriesInfo.name} · {seriesInfo.year}</span>}
          <h2>{item.name}</h2>

          <div className="product-modal__price-row">
            <span className="product-modal__price">{formatFCFA(item.price)}</span>
            <span
              className={`product-modal__stock ${item.inStock ? "is-in-stock" : "is-out"}`}
            >
              {item.inStock ? "En stock" : "Rupture de stock"}
            </span>
          </div>

          <dl className="product-modal__specs">
            <div>
              <dt>Stockage</dt>
              <dd>{item.storage}</dd>
            </div>
            <div>
              <dt>Note</dt>
              <dd>★ {item.rating} / 5</dd>
            </div>
            {seriesInfo && (
              <div>
                <dt>Finition</dt>
                <dd>
                  <span className="product-modal__swatch" style={{ background: seriesInfo.finish }} />
                  {seriesInfo.finishName}
                </dd>
              </div>
            )}
            {seriesInfo && (
              <div>
                <dt>Génération</dt>
                <dd>{seriesInfo.name} ({seriesInfo.year})</dd>
              </div>
            )}
          </dl>

          <button type="button" className="product-modal__cta" disabled={!item.inStock}>
            {item.inStock ? "Ajouter au panier" : "Indisponible"}
          </button>
        </div>
      </div>
    </div>
  );
}
