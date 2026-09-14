import { useCart } from "../context/CartContext";

function formatPrice(value) {
  return value.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();
  const lineTotal = item.price * item.quantity;

  return (
    <li className="cart-item">
      <img className="cart-item__image" src={item.image} alt={item.name} width={72} height={72} />

      <div className="cart-item__info">
        <p className="cart-item__name">{item.name}</p>
        <p className="cart-item__unit-price">{formatPrice(item.price)} / unité</p>
      </div>

      <div className="cart-item__quantity" role="group" aria-label={`Quantité pour ${item.name}`}>
        <button type="button" className="cart-item__qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Diminuer la quantité">−</button>
        <input
          type="number"
          className="cart-item__qty-input"
          min={1}
          value={item.quantity}
          onChange={(e) => {
            const next = parseInt(e.target.value, 10);
            updateQuantity(item.id, Number.isNaN(next) ? 1 : next);
          }}
          aria-label={`Quantité de ${item.name}`}
        />
        <button type="button" className="cart-item__qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Augmenter la quantité">+</button>
      </div>

      <p className="cart-item__line-total">{formatPrice(lineTotal)}</p>

      <button type="button" className="cart-item__remove" onClick={() => removeItem(item.id)} aria-label={`Retirer ${item.name} du panier`}>
        Retirer
      </button>
    </li>
  );
}