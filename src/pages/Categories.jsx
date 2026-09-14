import { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import Filter from "../components/Filter.jsx";
import Sort from "../components/Sort.jsx";
import CategoryList from "../components/CategoryList.jsx";
import { series } from "../data/series.js";
import { iphones } from "../data/iphones.js";
import { gsmImage, withImageFallback } from "../utils/gsmImage.js";
import {
  searchItems,
  filterBySeries,
  filterByPrice,
  sortItems,
  getPriceBounds,
} from "../utils/filterSort.js";
import "./Categories.css";

const ALL_BOUNDS = getPriceBounds(iphones);

export default function Categories() {
  const [query, setQuery] = useState("");
  const [selectedSeriesIds, setSelectedSeriesIds] = useState([]);
  const [priceRange, setPriceRange] = useState(ALL_BOUNDS);
  const [sortValue, setSortValue] = useState("relevance");

  const isSearching = query.trim().length > 0;

  const results = useMemo(() => {
    let list = searchItems(iphones, query);
    list = filterBySeries(list, selectedSeriesIds);
    list = filterByPrice(list, priceRange);
    return sortItems(list, sortValue);
  }, [query, selectedSeriesIds, priceRange, sortValue]);

  const seriesName = (item) => series.find((s) => s.id === item.seriesId)?.name;
  const modelCount = (s) => iphones.filter((p) => p.seriesId === s.id).length;

  const toggleSeries = (id) =>
    setSelectedSeriesIds((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));

  const resetFilters = () => {
    setSelectedSeriesIds([]);
    setPriceRange(ALL_BOUNDS);
  };

  return (
    <div className="categories-page">
      <section className="categories-hero">
        <img
          className="categories-hero__bg"
          src={gsmImage("apple-iphone-16-pro-max.jpg")}
          alt=""
          onError={withImageFallback}
        />
        <div className="categories-hero__scrim" />
        <div className="categories-hero__content">
          <span className="categories-hero__eyebrow">Catalogue complet</span>
          <h1>iPhone. Tous les modèles, un seul endroit.</h1>
          <p>De l'iPhone SE à l'iPhone 16 Pro Max — comparez, filtrez et trouvez le vôtre au meilleur prix à Dakar.</p>
          <div className="categories-hero__search">
            <SearchBar
              value={query}
              onChange={setQuery}
              tone="dark"
              placeholder="Ex. iPhone 15 Pro, iPhone SE, iPhone 13 mini…"
            />
          </div>
        </div>
      </section>

      <div className="categories-body">
        {!isSearching && (
          <section className="categories-browse">
            <div className="categories-browse__head">
              <h2>Explorer par série</h2>
              <span>{series.length} générations disponibles</span>
            </div>
            <CategoryList items={series} variant="category" getCount={modelCount} />
          </section>
        )}

        {isSearching && (
          <section className="categories-results">
            <Filter
              groups={series}
              groupLabel="Série"
              selectedGroupIds={selectedSeriesIds}
              onGroupToggle={toggleSeries}
              priceBounds={ALL_BOUNDS}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              onReset={resetFilters}
            />
            <div className="categories-results__main">
              <Sort value={sortValue} onChange={setSortValue} resultCount={results.length} />
              <CategoryList
                items={results}
                variant="phone"
                getSeriesName={seriesName}
                emptyLabel={`Aucun iPhone ne correspond à « ${query} »`}
              />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
