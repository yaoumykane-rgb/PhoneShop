// components/PhoneCard.jsx
// Carte résultat pour un téléphone (utilisée par CategoriesPage et CategoryDetailPage)

export default function PhoneCard({ phone }) {
  const formattedPrice = new Intl.NumberFormat("fr-FR").format(phone.price);

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4">
      <img
        src={phone.image}
        alt={phone.name}
        className="h-32 w-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div>
        {phone.brandName && (
          <p className="text-xs uppercase text-neutral-400">{phone.brandName}</p>
        )}
        <h4 className="font-medium text-neutral-900">{phone.name}</h4>
        <p className="text-sm font-semibold text-neutral-700">{formattedPrice} FCFA</p>
      </div>
    </div>
  );
}
