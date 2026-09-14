import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOrderById } from "../services/authService";

const STATUS_LABELS = {
  pending: "En attente",
  processing: "En préparation",
  shipped: "Expédiée",
  delivered: "Livrée",
  cancelled: "Annulée",
};

function formatPrice(amount) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(amount || 0);
}

export default function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getOrderById(id);
        setOrder(data);
      } catch (err) {
        setError("Cette commande est introuvable ou une erreur est survenue.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900" />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-neutral-500">{error}</p>
        <Link to="/orders" className="mt-4 inline-block text-sm font-medium text-[#0071e3] hover:underline">
          ← Retour à mes commandes
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <Link to="/orders" className="text-sm font-medium text-[#0071e3] hover:underline">
        ← Retour à mes commandes
      </Link>

      <div className="mt-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900">Commande #{order.id}</h1>
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
          {STATUS_LABELS[order.status] || order.status}
        </span>
      </div>

      <p className="mt-1 text-sm text-neutral-500">
        Passée le{" "}
        {new Date(order.createdAt).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <div className="mt-8 divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
        {order.items?.map((item) => (
          <div key={item.id} className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-4">
              {item.image && (
                <img src={item.image} alt={item.name} className="h-14 w-14 rounded-lg object-cover" />
              )}
              <div>
                <p className="text-sm font-medium text-neutral-900">{item.name}</p>
                <p className="text-sm text-neutral-500">Quantité : {item.quantity}</p>
              </div>
            </div>
            <span className="text-sm font-medium text-neutral-900">
              {formatPrice(item.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl bg-neutral-50 px-5 py-4">
        <span className="text-sm font-medium text-neutral-700">Total</span>
        <span className="text-lg font-semibold text-neutral-900">{formatPrice(order.total)}</span>
      </div>

      {order.shippingAddress && (
        <div className="mt-6">
          <h2 className="mb-2 text-sm font-medium text-neutral-700">Adresse de livraison</h2>
          <p className="text-sm text-neutral-500">{order.shippingAddress}</p>
        </div>
      )}
    </div>
  );
}