import { Link } from "react-router-dom";

const STATUS_STYLES = {
  pending: { dot: "bg-amber-400", text: "text-amber-400", bg: "bg-amber-500/10" },
  processing: { dot: "bg-blue-400", text: "text-blue-400", bg: "bg-blue-500/10" },
  shipped: { dot: "bg-purple-400", text: "text-purple-400", bg: "bg-purple-500/10" },
  delivered: { dot: "bg-green-400", text: "text-green-400", bg: "bg-green-500/10" },
  cancelled: { dot: "bg-red-400", text: "text-red-400", bg: "bg-red-500/10" },
};

const STATUS_LABELS = {
  pending: "En attente",
  processing: "En préparation",
  shipped: "Expédiée",
  delivered: "Livrée",
  cancelled: "Annulée",
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatPrice(amount) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function OrderCard({ order }) {
  const status = STATUS_STYLES[order.status] || {
    dot: "bg-neutral-400",
    text: "text-neutral-400",
    bg: "bg-neutral-500/10",
  };
  const statusLabel = STATUS_LABELS[order.status] || order.status;

  return (
    <Link
      to={`/orders/${order.id}`}
      className="group flex items-center justify-between rounded-xl border border-white/10 bg-neutral-900 px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
    >
      <div>
        <p className="text-[15px] font-medium text-white">Commande #{order.id}</p>
        <p className="mt-0.5 text-sm text-neutral-400">
          {formatDate(order.date)} · {order.items?.length || 0} article(s)
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${status.bg} ${status.text}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
          {statusLabel}
        </span>
        <span className="text-[15px] font-semibold text-white">
          {formatPrice(order.total)}
        </span>
      </div>
    </Link>
  );
}