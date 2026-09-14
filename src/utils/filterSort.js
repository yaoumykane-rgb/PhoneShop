const normalize = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function searchItems(items, query) {
  if (!query.trim()) return items;
  const q = normalize(query);
  return items.filter((item) => normalize(item.name).includes(q));
}

export function filterBySeries(items, seriesIds) {
  if (!seriesIds || seriesIds.length === 0) return items;
  return items.filter((item) => seriesIds.includes(item.seriesId));
}

export function filterByPrice(items, range) {
  return items.filter((item) => item.price >= range.min && item.price <= range.max);
}

export function sortItems(items, sortValue) {
  const list = [...items];
  switch (sortValue) {
    case "price-asc":
      return list.sort((a, b) => a.price - b.price);
    case "price-desc":
      return list.sort((a, b) => b.price - a.price);
    case "name-asc":
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return list.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return list;
  }
}

export function getPriceBounds(items) {
  const prices = items.map((p) => p.price);
  return {
    min: Math.floor(Math.min(...prices) / 5000) * 5000,
    max: Math.ceil(Math.max(...prices) / 5000) * 5000,
  };
}
