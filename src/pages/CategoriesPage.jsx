// pages/CategoriesPage.jsx
// Route : /categories

import { brands, allPhones } from "../data/brands";
import { usePhoneFilters } from "../hooks/usePhoneFilters";
import CategoryList from "../components/CategoryList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import PhoneCard from "../components/PhoneCard";

export default function CategoriesPage() {
  const {
    search,
    setSearch,
    brandFilter,
    setBrandFilter,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    filteredPhones,
  } = usePhoneFilters(allPhones);

  // On n'affiche les résultats filtrés que si l'utilisateur a effectué une recherche/filtre
  const isFiltering =
    search.trim() !== "" || brandFilter !== "all" || priceRange.min > 0 || priceRange.max !== Infinity;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 p-6">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">Catégories</h1>
        <p className="text-neutral-500">Trouvez votre téléphone par marque, prix ou nom.</p>
      </div>

      <SearchBar value={search} onChange={setSearch} />

      <div className="flex flex-wrap items-end justify-between gap-4">
        <Filter
          brands={brands}
          brandFilter={brandFilter}
          onBrandChange={setBrandFilter}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
        />
        <Sort sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      {isFiltering ? (
        <section>
          <h2 className="mb-3 text-lg font-medium text-neutral-800">
            {filteredPhones.length} résultat{filteredPhones.length > 1 ? "s" : ""}
          </h2>
          {filteredPhones.length === 0 ? (
            <p className="text-neutral-500">Aucun téléphone ne correspond à votre recherche.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {filteredPhones.map((phone) => (
                <PhoneCard key={phone.id} phone={phone} />
              ))}
            </div>
          )}
        </section>
      ) : (
        <section>
          <h2 className="mb-3 text-lg font-medium text-neutral-800">Marques</h2>
          <CategoryList brands={brands} />
        </section>
      )}
    </div>
  );
}
