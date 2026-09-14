import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import DeliveryForm from "../components/DeliveryForm";

function Delivery() {
  const navigate = useNavigate();

  const {
    checkoutData,
    setCheckoutData,
  } = useCart();

  const handleContinue = (deliveryData) => {
    setCheckoutData({
      ...checkoutData,
      delivery: deliveryData,
    });

    navigate("/order-confirmation");
  };

  const handleBack = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="bg-[#080C1C] text-white">
        <div className="mx-auto max-w-7xl px-6 py-5">

          <div className="flex items-center justify-between">

            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">
                PhoneShop{" "}
                <span className="text-indigo-500">ICI</span>
              </h1>

              <p className="text-xs text-gray-400 mt-1">
                Vos téléphones, notre priorité
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg">🛒</span>
              <span>Panier</span>
            </div>

          </div>

        </div>
      </header>


      {/* PROGRESSION */}
      <div className="bg-white border-b border-gray-200">

        <div className="mx-auto max-w-6xl px-6 py-7">

          <div className="flex items-center justify-center">

            {/* 1 */}
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                ✓
              </div>

              <div className="hidden sm:block">
                <p className="font-bold text-gray-900">
                  Informations
                </p>

                <p className="text-xs text-gray-500">
                  Terminé
                </p>
              </div>

            </div>


            <div className="h-px w-12 sm:w-28 bg-indigo-300 mx-4"></div>


            {/* 2 */}
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white font-bold shadow-sm">
                2
              </div>

              <div className="hidden sm:block">
                <p className="font-bold text-gray-900">
                  Livraison
                </p>

                <p className="text-xs text-gray-500">
                  Adresse de livraison
                </p>
              </div>

            </div>


            <div className="hidden sm:block h-px w-12 sm:w-28 bg-gray-300 mx-4"></div>


            {/* 3 */}
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

        <div className="mb-10">

          <p className="text-sm font-semibold text-indigo-600 mb-2">
            ÉTAPE 2 SUR 3
          </p>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Adresse de livraison
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl">
            Indiquez l'adresse à laquelle vous souhaitez recevoir
            votre commande.
          </p>

        </div>


        {/* FORMULAIRE */}
        <div className="max-w-4xl">

          <DeliveryForm
            onContinue={handleContinue}
            onBack={handleBack}
          />

        </div>

      </main>


      {/* GARANTIES */}
      <section className="bg-white border-t border-gray-200">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                🚚
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Livraison à domicile
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Recevez votre téléphone directement chez vous.
                </p>
              </div>

            </div>


            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                🔒
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Données protégées
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Vos informations sont traitées en toute sécurité.
                </p>
              </div>

            </div>


            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                📞
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Confirmation par téléphone
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Nous vous contacterons pour confirmer la livraison.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Delivery;