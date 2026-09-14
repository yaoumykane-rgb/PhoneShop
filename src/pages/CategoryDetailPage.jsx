// pages/CategoryDetailPage.jsx
// Route : /categories/:id

import { useParams, Link } from "react-router-dom";
import { brands } from "../data/brands";
import { usePhoneFilters } from "../hooks/usePhoneFilters";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import PhoneCard from "../components/PhoneCard";

export default function CategoryDetailPage() {
  const { id } = useParams();
  const brand = brands.find((b) => b.id === id);

  // Les téléphones de cette marque, avec brandId/brandName pour rester compatibles avec usePhoneFilters
  const phonesOfBrand = brand
    ? brand.phones.map((phone) => ({ ...phone, brandId: brand.id, brandName: brand.name }))
    : [];

  const {
    search,
    setSearch,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    filteredPhones,
  } = usePhoneFilters(phonesOfBrand);

  if (!brand) {
    return (
      <div className="mx-auto max-w-5xl p-6">
        <p className="text-neutral-500">Marque introuvable.</p>
        <Link to="/categories" className="text-sm text-neutral-700 underline">
          Retour aux catégories
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 p-6">
      <div>
        <Link to="/categories" className="text-sm text-neutral-500 hover:underline">
          ← Toutes les catégories
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-neutral-900">{brand.name}</h1>
        <p className="text-neutral-500">
          {brand.phones.length} modèle{brand.phones.length > 1 ? "s" : ""} disponible
          {brand.phones.length > 1 ? "s" : ""}
        </p>
      </div>

      <SearchBar value={search} onChange={setSearch} placeholder={`Rechercher chez ${brand.name}...`} />

      <div className="flex flex-wrap items-end justify-between gap-4">
        {/* Marque déjà fixée par l'URL : on masque le filtre marque */}
        <Filter
          brands={brands}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          hideBrandFilter
        />
        <Sort sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      {filteredPhones.length === 0 ? (
        <p className="text-neutral-500">Aucun téléphone ne correspond à votre recherche.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {filteredPhones.map((phone) => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      )}
    </div>
  );
}
