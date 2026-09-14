import { useEffect, useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import Filter from "../components/Filter.jsx";
import Sort from "../components/Sort.jsx";
import CategoryList from "../components/CategoryList.jsx";
import { getSeriesById } from "../data/series.js";
import { iphones } from "../data/iphones.js";
import { searchItems, filterByPrice, sortItems, getPriceBounds } from "../utils/filterSort.js";
import { withImageFallback } from "../utils/gsmImage.js";
import "./CategoryDetail.css";

export default function CategoryDetail() {
  const { id } = useParams();
  const currentSeries = getSeriesById(id);

  const seriesPhones = useMemo(() => iphones.filter((p) => p.seriesId === id), [id]);
  const priceBounds = useMemo(
    () => (seriesPhones.length ? getPriceBounds(seriesPhones) : { min: 0, max: 0 }),
    [seriesPhones]
  );

  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState(priceBounds);
  const [sortValue, setSortValue] = useState("relevance");

  // Resynchronise si on navigue d'une série à une autre sans démontage.
  useEffect(() => {
    setQuery("");
    setPriceRange(priceBounds);
    setSortValue("relevance");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const results = useMemo(() => {
    let list = searchItems(seriesPhones, query);
    list = filterByPrice(list, priceRange);
    return sortItems(list, sortValue);
  }, [seriesPhones, query, priceRange, sortValue]);

  // Tous les hooks sont déclarés avant ce retour conditionnel (règle des Hooks).
  if (!currentSeries) return <Navigate to="/categories" replace />;

  const resetFilters = () => setPriceRange(priceBounds);

  return (
    <div className="category-detail">
      <div className="category-detail__container category-detail__container--top">
        <Link to="/categories" className="category-detail__back">
          ← Toutes les séries
        </Link>
      </div>

      <header className="category-detail__hero" style={{ "--finish": currentSeries.finish }}>
        <img src={currentSeries.image} alt="" className="category-detail__hero-img" onError={withImageFallback} />
        <div className="category-detail__hero-tint" />
        <div className="category-detail__hero-content">
          <span className="category-detail__hero-year">{currentSeries.year}</span>
          <h1>{currentSeries.name}</h1>
          <p>{currentSeries.tagline}</p>
          <div className="category-detail__finish">
            <span className="category-detail__swatch" />
            {currentSeries.finishName}
          </div>
        </div>
      </header>

      <div className="category-detail__container">
        <div className="category-detail__search">
          <SearchBar value={query} onChange={setQuery} placeholder={`Rechercher un modèle ${currentSeries.name}…`} />
        </div>

        <section className="category-detail__results">
          <Filter
            priceBounds={priceBounds}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            onReset={resetFilters}
          />
          <div className="category-detail__main">
            <Sort value={sortValue} onChange={setSortValue} resultCount={results.length} />
            <CategoryList
              items={results}
              variant="phone"
              emptyLabel={`Aucun modèle ${currentSeries.name} ne correspond à ces critères`}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
