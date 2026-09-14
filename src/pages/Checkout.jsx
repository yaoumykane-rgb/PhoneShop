import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";

function Checkout() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="bg-[#080C1C] text-white">
        <div className="mx-auto max-w-7xl px-6 py-5">

          <div className="flex items-center justify-between gap-6">

            {/* LOGO */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-extrabold tracking-tight">
                PhoneShop{" "}
                <span className="text-indigo-500">
                  ICI
                </span>
              </h1>

              <p className="text-xs text-gray-400 mt-1">
                Vos téléphones, notre priorité
              </p>
            </div>


            {/* RECHERCHE */}
            <div className="hidden md:block flex-1 max-w-xl">

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Rechercher un téléphone..."
                  className="w-full rounded-xl bg-gray-800 border border-gray-700 px-11 py-3 text-sm text-white outline-none focus:border-indigo-500 transition placeholder-gray-400"
                />

              </div>

            </div>


            {/* COMPTE + PANIER */}
            <div className="flex items-center gap-5 flex-shrink-0">

              <div className="hidden sm:flex items-center gap-2 text-sm">
                <span className="text-lg">👤</span>
                <span>Mon compte</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-lg">🛒</span>
                <span>Panier</span>
              </div>

            </div>

          </div>

        </div>
      </header>


      {/* PROGRESSION */}
      <div className="bg-white border-b border-gray-200">

        <div className="mx-auto max-w-6xl px-6 py-7">

          <div className="flex items-center justify-center">

            {/* ÉTAPE 1 */}
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white font-bold shadow-sm">
                1
              </div>

              <div className="hidden sm:block">
                <p className="font-bold text-gray-900">
                  Informations
                </p>

                <p className="text-xs text-gray-500">
                  Vos coordonnées
                </p>
              </div>

            </div>


            <div className="h-px w-12 sm:w-28 bg-gray-300 mx-4"></div>


            {/* ÉTAPE 2 */}
            <div className="flex items-center gap-3 opacity-50">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold">
                2
              </div>

              <div className="hidden sm:block">
                <p className="font-bold text-gray-900">
                  Livraison
                </p>

                <p className="text-xs text-gray-500">
                  Adresse
                </p>
              </div>

            </div>


            <div className="hidden sm:block h-px w-12 sm:w-28 bg-gray-300 mx-4"></div>


            {/* ÉTAPE 3 */}
            <div className="hidden sm:flex items-center gap-3 opacity-50">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold">
                3
              </div>

              <div>
                <p className="font-bold text-gray-900">
                  Confirmation
                </p>

                <p className="text-xs text-gray-500">
                  Validation
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* CONTENU */}
      <main className="mx-auto max-w-7xl px-6 py-10 lg:py-12">

        {/* TITRE */}
        <div className="mb-10">

          <p className="text-sm font-semibold text-indigo-600 mb-2">
            ÉTAPE 1 SUR 3
          </p>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Finaliser votre commande
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl">
            Renseignez vos informations personnelles pour poursuivre
            votre commande en toute simplicité.
          </p>

        </div>


        {/* FORMULAIRE + COMMANDE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* FORMULAIRE */}
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>


          {/* RÉSUMÉ */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <OrderSummary />
            </div>
          </div>

        </div>

      </main>


      {/* GARANTIES */}
      <section className="bg-white border-t border-gray-200">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* LIVRAISON */}
            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                🚚
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Livraison rapide
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Livraison à domicile à Dakar et environs.
                </p>
              </div>

            </div>


            {/* SÉCURITÉ */}
            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                🔒
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Paiement sécurisé
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Vos informations restent protégées.
                </p>
              </div>

            </div>


            {/* SERVICE CLIENT */}
            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                🎧
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Service client
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Une équipe disponible pour vous accompagner.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Checkout;