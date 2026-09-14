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
import React from "react";
import { useCart } from "../context/CartContext";

export default function OrderSummary() {
  const {
    items,
    total,
    deliveryCost,
    grandTotal,
  } = useCart();

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      {/* EN-TÊTE */}
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Votre commande
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Vérifiez les détails avant de continuer
            </p>
          </div>

          <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold">
            {items.length} article{items.length > 1 ? "s" : ""}
          </span>
        </div>
      </div>


      {/* PRODUITS */}
      <div className="px-6 py-5">

        {items.length > 0 ? (
          <div className="space-y-5">

            {items.map((item) => (

              <div
                key={item.id}
                className="flex gap-4"
              >

                {/* IMAGE */}
                <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl">
                      📱
                    </span>
                  )}

                </div>


                {/* INFORMATIONS */}
                <div className="flex-1 min-w-0">

                  <div className="flex justify-between gap-3">

                    <div>
                      <h3 className="font-bold text-gray-900">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Téléphone
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        Quantité : {item.quantity}
                      </p>
                    </div>

                    <p className="font-bold text-gray-900 whitespace-nowrap">
                      {(item.price * item.quantity).toLocaleString()} FCFA
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>
        ) : (

          <div className="py-8 text-center">

            <div className="text-4xl mb-3">
              🛒
            </div>

            <p className="font-semibold text-gray-700">
              Votre panier est vide
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Ajoutez un téléphone pour continuer.
            </p>

          </div>

        )}

      </div>


      {/* RÉSUMÉ DES PRIX */}
      {items.length > 0 && (
        <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">

          <div className="space-y-4">

            {/* SOUS-TOTAL */}
            <div className="flex justify-between">
              <span className="text-gray-600">
                Sous-total
              </span>

              <span className="font-semibold text-gray-900">
                {total.toLocaleString()} FCFA
              </span>
            </div>


            {/* LIVRAISON */}
            <div className="flex justify-between">
              <div>
                <span className="text-gray-600">
                  Livraison
                </span>

                <p className="text-xs text-gray-400 mt-1">
                  Livraison à domicile
                </p>
              </div>

              <span className="font-semibold text-gray-900">
                {deliveryCost.toLocaleString()} FCFA
              </span>
            </div>

          </div>


          {/* TOTAL */}
          <div className="border-t border-gray-200 mt-5 pt-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-lg font-bold text-gray-900">
                  Total
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Toutes taxes et livraison incluses
                </p>
              </div>

              <p className="text-2xl font-extrabold text-indigo-600">
                {grandTotal.toLocaleString()} FCFA
              </p>

            </div>

          </div>

        </div>
      )}


      {/* PAIEMENT SÉCURISÉ */}
      <div className="px-6 py-5">

        <div className="rounded-xl bg-green-50 border border-green-100 p-4">

          <div className="flex gap-3">

            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
              🔒
            </div>

            <div>
              <p className="font-bold text-green-700">
                Paiement sécurisé
              </p>

              <p className="text-sm text-green-600 mt-1 leading-5">
                Vos informations sont protégées et votre paiement est sécurisé.
              </p>
            </div>

          </div>

        </div>


        {/* MOYENS DE PAIEMENT */}
        <div className="mt-6">

          <div className="mb-4">

            <h3 className="font-bold text-gray-900">
              Moyens de paiement
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Choisissez votre mode de paiement
            </p>

          </div>


          <div className="grid grid-cols-2 gap-3">

            {/* WAVE */}
            <button
              type="button"
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 hover:border-indigo-500 hover:shadow-sm transition"
            >

              <div className="w-10 h-10 rounded-lg bg-[#19A9E5] flex items-center justify-center flex-shrink-0">

                <span className="text-white font-extrabold">
                  W
                </span>

              </div>

              <div className="text-left">

                <p className="text-sm font-bold text-gray-900">
                  Wave
                </p>

                <p className="text-xs text-gray-500">
                  Mobile Money
                </p>

              </div>

            </button>


            {/* ORANGE MONEY */}
            <button
              type="button"
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 hover:border-indigo-500 hover:shadow-sm transition"
            >

              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">

                <span className="text-white font-extrabold text-xs">
                  OM
                </span>

              </div>

              <div className="text-left">

                <p className="text-sm font-bold text-gray-900">
                  Orange Money
                </p>

                <p className="text-xs text-gray-500">
                  Mobile Money
                </p>

              </div>

            </button>


            {/* FREE MONEY */}
            <button
              type="button"
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 hover:border-indigo-500 hover:shadow-sm transition"
            >

              <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">

                <span className="text-white font-extrabold text-xs">
                  FM
                </span>

              </div>

              <div className="text-left">

                <p className="text-sm font-bold text-gray-900">
                  Free Money
                </p>

                <p className="text-xs text-gray-500">
                  Mobile Money
                </p>

              </div>

            </button>


            {/* CARTE */}
            <button
              type="button"
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 hover:border-indigo-500 hover:shadow-sm transition"
            >

              <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">

                <span className="text-lg">
                  💳
                </span>

              </div>

              <div className="text-left">

                <p className="text-sm font-bold text-gray-900">
                  Carte bancaire
                </p>

                <p className="text-xs text-gray-500">
                  Visa / Mastercard
                </p>

              </div>

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}