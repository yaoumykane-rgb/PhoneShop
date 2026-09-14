import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getOrders } from "../services/authService";
import OrderCard from "../components/OrderCard";

function OrderSkeleton() {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-900 px-5 py-4">
      <div className="space-y-2">
        <div className="h-4 w-32 animate-pulse rounded bg-neutral-800" />
        <div className="h-3 w-40 animate-pulse rounded bg-neutral-800/60" />
      </div>
      <div className="flex items-center gap-4">
        <div className="h-6 w-20 animate-pulse rounded-full bg-neutral-800" />
        <div className="h-4 w-16 animate-pulse rounded bg-neutral-800" />
      </div>
    </div>
  );
}

export default function Orders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (err) {
        setError("Impossible de charger tes commandes pour le moment.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const stats = useMemo(() => {
    const total = orders.reduce((sum, o) => sum + o.total, 0);
    const inProgress = orders.filter((o) =>
      ["pending", "processing", "shipped"].includes(o.status)
    ).length;
    return { count: orders.length, total, inProgress };
  }, [orders]);

  const formattedTotal = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(stats.total);

  const firstName = user?.name?.split(" ")[0];

  return (
    <div>
      <div className="mb-7">
        <h1 className="font-display text-[26px] font-bold text-white">
          {firstName ? `Bonjour, ${firstName}` : "Mes commandes"}
        </h1>
        <p className="mt-1 text-[15px] text-neutral-400">
          {stats.count > 0
            ? `Tu as passé ${stats.count} commande${stats.count > 1 ? "s" : ""} chez nous.`
            : "Retrouve ici l'historique de tes achats."}
        </p>
      </div>

      {!loading && !error && orders.length > 0 && (
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="col-span-2 rounded-2xl bg-linear-to-br from-[#0071e3] to-[#0047a8] px-5 py-5 text-white sm:col-span-1">
            <p className="text-[13px] text-white/70">Total dépensé</p>
            <p className="font-display mt-1 text-[26px] font-bold">{formattedTotal}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-5">
            <p className="text-[13px] text-neutral-400">Commandes</p>
            <p className="font-display mt-1 text-[26px] font-bold text-white">{stats.count}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-5">
            <p className="text-[13px] text-neutral-400">En cours</p>
            <p className="font-display mt-1 text-[26px] font-bold text-white">{stats.inProgress}</p>
          </div>
        </div>
      )}

      {loading && (
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((i) => (
            <OrderSkeleton key={i} />
          ))}
        </div>
      )}

      {error && (
        <div className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</div>
      )}

      {!loading && !error && orders.length === 0 && (
        <div className="rounded-2xl border border-dashed border-neutral-700 py-16 text-center">
          <p className="text-neutral-400">Tu n'as pas encore passé de commande.</p>
          <Link
            to="/"
            className="mt-4 inline-block rounded-full bg-[#0071e3] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#0077ed]"
          >
            Découvrir les produits
          </Link>
        </div>
      )}

      {!loading && !error && orders.length > 0 && (
        <div className="flex flex-col gap-3">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}