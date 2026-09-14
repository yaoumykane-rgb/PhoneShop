import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function formatPrice(value) {
  return value.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}

export default function CartSummary() {
  const { itemCount, subtotal, shipping, total } = useCart();
  const freeShippingGap = Math.max(0, 50 - subtotal);

  return (
    <aside className="cart-summary" aria-label="Résumé du panier">
      <h2 className="cart-summary__title">Résumé</h2>

      <dl className="cart-summary__rows">
        <div className="cart-summary__row"><dt>Articles ({itemCount})</dt><dd>{formatPrice(subtotal)}</dd></div>
        <div className="cart-summary__row"><dt>Livraison</dt><dd>{shipping === 0 ? "Offerte" : formatPrice(shipping)}</dd></div>
      </dl>

      {freeShippingGap > 0 && subtotal > 0 && (
        <p className="cart-summary__hint">Plus que {formatPrice(freeShippingGap)} pour la livraison offerte.</p>
      )}

      <div className="cart-summary__total"><span>Total</span><span>{formatPrice(total)}</span></div>

      <Link
        to="/checkout"
        className="cart-summary__checkout-btn"
        aria-disabled={itemCount === 0}
        onClick={(e) => { if (itemCount === 0) e.preventDefault(); }}
      >
        Passer la commande
      </Link>
    </aside>
  );
}