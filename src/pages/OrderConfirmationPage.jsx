import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import OrderConfirmation from "../components/OrderConfirmation";

function OrderConfirmationPage() {
  const navigate = useNavigate();

  const {
    grandTotal,
    clearCart,
    items,
  } = useCart();

  const order = {
    id: `PS-${Date.now()}`,
    total: grandTotal,
    items: items,
  };

  const handleFinish = () => {
    clearCart();
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="bg-[#080C1C] text-white">

        <div className="mx-auto max-w-7xl px-6 py-5">

          <div>
            <h1 className="text-2xl font-extrabold">
              PhoneShop{" "}
              <span className="text-indigo-500">
                ICI
              </span>
            </h1>

            <p className="text-xs text-gray-400 mt-1">
              Vos téléphones, notre priorité
            </p>
          </div>

        </div>

      </header>


      {/* PROGRESSION */}
      <div className="bg-white border-b border-gray-200">

        <div className="mx-auto max-w-5xl px-6 py-7">

          <div className="flex items-center justify-center">

            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
                ✓
              </div>
              <span className="hidden sm:block font-semibold text-gray-700">
                Informations
              </span>
            </div>

            <div className="h-px w-12 sm:w-28 bg-green-300 mx-3"></div>

            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
                ✓
              </div>
              <span className="hidden sm:block font-semibold text-gray-700">
                Livraison
              </span>
            </div>

            <div className="h-px w-12 sm:w-28 bg-indigo-300 mx-3"></div>

            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <span className="hidden sm:block font-bold text-gray-900">
                Confirmation
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* CONTENU */}
      <main className="px-6 py-10 lg:py-14">

        <OrderConfirmation
          order={order}
          onFinish={handleFinish}
        />

      </main>


      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-7 text-center">

          <p className="text-sm text-gray-500">
            © 2026 PhoneShop ICI — Tous droits réservés.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default OrderConfirmationPage;