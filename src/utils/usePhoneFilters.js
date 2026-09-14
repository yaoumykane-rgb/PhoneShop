// hooks/usePhoneFilters.js
// Centralise la logique de recherche, filtre (marque + prix) et tri.
// Utilisé par CategoriesPage et CategoryDetailPage.

import { useMemo, useState } from "react";

const SORT_OPTIONS = {
  NONE: "none",
  PRICE_ASC: "price_asc",
  PRICE_DESC: "price_desc",
  NAME_ASC: "name_asc",
  NAME_DESC: "name_desc",
};

export function usePhoneFilters(phones) {
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("all"); // id de marque ou "all"
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [sortBy, setSortBy] = useState(SORT_OPTIONS.NONE);

  const filteredPhones = useMemo(() => {
    let result = [...phones];

    // Recherche par nom (insensible à la casse)
    if (search.trim() !== "") {
      const query = search.trim().toLowerCase();
      result = result.filter((phone) => phone.name.toLowerCase().includes(query));
    }

    // Filtre par marque
    if (brandFilter !== "all") {
      result = result.filter((phone) => phone.brandId === brandFilter);
    }

    // Filtre par prix
    result = result.filter(
      (phone) => phone.price >= priceRange.min && phone.price <= priceRange.max
    );

    // Tri
    switch (sortBy) {
      case SORT_OPTIONS.PRICE_ASC:
        result.sort((a, b) => a.price - b.price);
        break;
      case SORT_OPTIONS.PRICE_DESC:
        result.sort((a, b) => b.price - a.price);
        break;
      case SORT_OPTIONS.NAME_ASC:
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case SORT_OPTIONS.NAME_DESC:
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return result;
  }, [phones, search, brandFilter, priceRange, sortBy]);

  return {
    search,
    setSearch,
    brandFilter,
    setBrandFilter,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    filteredPhones,
    SORT_OPTIONS,
  };
}