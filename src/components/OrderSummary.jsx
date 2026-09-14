function formatPrice(value) {
  return value.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}

export default function OrderSummary({ items, subtotal, shipping, total, orderId }) {
  return (
    <section className="order-summary" aria-label="Résumé de la commande">
      {orderId && (
        <p className="order-summary__id">
          Commande <strong>#{orderId}</strong>
        </p>
      )}

      <h2 className="order-summary__title">Détail de la commande</h2>

      <ul className="order-summary__list">
        {items.map((item) => (
          <li key={item.id} className="order-summary__item">
            <span className="order-summary__item-name">
              {item.name} <span className="order-summary__item-qty">× {item.quantity}</span>
            </span>
            <span>{formatPrice(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>

      <dl className="order-summary__totals">
        <div className="order-summary__row">
          <dt>Sous-total</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        <div className="order-summary__row">
          <dt>Livraison</dt>
          <dd>{shipping === 0 ? "Offerte" : formatPrice(shipping)}</dd>
        </div>
        <div className="order-summary__row order-summary__row--total">
          <dt>Total</dt>
          <dd>{formatPrice(total)}</dd>
        </div>
      </dl>
    </section>
  );
}