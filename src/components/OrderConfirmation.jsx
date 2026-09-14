import React from "react";

export default function OrderConfirmation({ order, onFinish }) {
  const total = order?.total || 0;

  return (
    <div className="max-w-3xl mx-auto">

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

        {/* SUCCÈS */}
        <div className="px-6 sm:px-10 pt-10 pb-8 text-center">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <span className="text-4xl text-green-600">
              ✓
            </span>
          </div>

          <p className="text-sm font-bold text-green-600 uppercase tracking-wide">
            Commande validée
          </p>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Merci pour votre commande !
          </h1>

          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Votre commande a bien été enregistrée. Notre équipe
            vous contactera prochainement pour confirmer la livraison.
          </p>

        </div>


        {/* NUMÉRO + TOTAL */}
        <div className="mx-6 sm:mx-10 rounded-2xl bg-gray-50 border border-gray-200 p-5">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div>
              <p className="text-sm text-gray-500">
                Numéro de commande
              </p>

              <p className="font-bold text-gray-900 mt-1">
                #{order?.id || "PS-2026-001"}
              </p>
            </div>


            <div className="sm:text-right">
              <p className="text-sm text-gray-500">
                Montant total
              </p>

              <p className="text-xl font-extrabold text-indigo-600 mt-1">
                {total.toLocaleString()} FCFA
              </p>
            </div>

          </div>

        </div>


        {/* PROCHAINE ÉTAPE */}
        <div className="px-6 sm:px-10 py-7">

          <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-5">

            <div className="flex gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl flex-shrink-0">
                📦
              </div>

              <div>
                <h3 className="font-bold text-indigo-900">
                  Que se passe-t-il maintenant ?
                </h3>

                <p className="text-sm text-indigo-700 mt-2 leading-6">
                  Notre équipe va vérifier votre commande et vous
                  contacter par téléphone afin de confirmer les
                  informations et organiser la livraison.
                </p>
              </div>

            </div>

          </div>


          {/* ÉTAPES */}
          <div className="mt-7">

            <h3 className="font-bold text-gray-900 mb-5">
              Suivi de votre commande
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  ✓
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Commande reçue
                  </p>

                  <p className="text-sm text-gray-500">
                    Votre commande a été enregistrée.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold">
                  2
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Confirmation
                  </p>

                  <p className="text-sm text-gray-500">
                    Notre équipe va vous contacter.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 font-bold">
                  3
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Livraison
                  </p>

                  <p className="text-sm text-gray-500">
                    Votre téléphone sera livré à l'adresse indiquée.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* BOUTON */}
          <button
            onClick={onFinish}
            className="mt-8 w-full rounded-xl bg-indigo-600 px-6 py-4 font-bold text-white hover:bg-indigo-700 transition shadow-sm"
          >
            Retour à la boutique
          </button>

        </div>

      </div>

    </div>
  );
}