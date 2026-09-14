import { gsmImage } from "../utils/gsmImage.js";
import { commonsImage } from "../utils/commonsImage.js";

// Chaque modèle a sa PROPRE photo produit réelle (studio, fond neutre),
// à l'exception de l'iPhone SE 2020/2022 qui partagent un design identique
// et la même photo Wikimedia Commons. Prix indicatifs en francs CFA (FCFA).
export const iphones = [
  // iPhone 16 — 2024
  { id: "iphone-16", seriesId: "iphone-16", name: "iPhone 16", storage: "128 Go", price: 550000, inStock: true, rating: 4.8, image: gsmImage("apple-iphone-16.jpg") },
  { id: "iphone-16-plus", seriesId: "iphone-16", name: "iPhone 16 Plus", storage: "128 Go", price: 650000, inStock: true, rating: 4.8, image: gsmImage("apple-iphone-16-plus.jpg") },
  { id: "iphone-16-pro", seriesId: "iphone-16", name: "iPhone 16 Pro", storage: "256 Go", price: 750000, inStock: true, rating: 4.9, image: gsmImage("apple-iphone-16-pro.jpg") },
  { id: "iphone-16-pro-max", seriesId: "iphone-16", name: "iPhone 16 Pro Max", storage: "256 Go", price: 800000, inStock: false, rating: 4.9, image: gsmImage("apple-iphone-16-pro-max.jpg") },

  // iPhone 15 — 2023
  { id: "iphone-15", seriesId: "iphone-15", name: "iPhone 15", storage: "128 Go", price: 510000, inStock: true, rating: 4.7, image: gsmImage("apple-iphone-15.jpg") },
  { id: "iphone-15-plus", seriesId: "iphone-15", name: "iPhone 15 Plus", storage: "128 Go", price: 590000, inStock: true, rating: 4.7, image: gsmImage("apple-iphone-15-plus.jpg") },
  { id: "iphone-15-pro", seriesId: "iphone-15", name: "iPhone 15 Pro", storage: "256 Go", price: 600000, inStock: true, rating: 4.8, image: gsmImage("apple-iphone-15-pro.jpg") },
  { id: "iphone-15-pro-max", seriesId: "iphone-15", name: "iPhone 15 Pro Max", storage: "256 Go", price: 790000, inStock: true, rating: 4.9, image: gsmImage("apple-iphone-15-pro-max.jpg") },

  // iPhone 14 — 2022
  { id: "iphone-14", seriesId: "iphone-14", name: "iPhone 14", storage: "128 Go", price: 400000, inStock: true, rating: 4.6, image: gsmImage("apple-iphone-14.jpg") },
  { id: "iphone-14-plus", seriesId: "iphone-14", name: "iPhone 14 Plus", storage: "128 Go", price: 460000, inStock: true, rating: 4.6, image: gsmImage("apple-iphone-14-plus.jpg") },
  { id: "iphone-14-pro", seriesId: "iphone-14", name: "iPhone 14 Pro", storage: "256 Go", price: 620000, inStock: false, rating: 4.7, image: gsmImage("apple-iphone-14-pro.jpg") },
  { id: "iphone-14-pro-max", seriesId: "iphone-14", name: "iPhone 14 Pro Max", storage: "256 Go", price: 600000, inStock: true, rating: 4.8, image: gsmImage("apple-iphone-14-pro-max.jpg") },

  // iPhone 13 — 2021
  { id: "iphone-13", seriesId: "iphone-13", name: "iPhone 13", storage: "128 Go", price: 200000, inStock: true, rating: 4.6, image: gsmImage("apple-iphone-13.jpg") },
  { id: "iphone-13-mini", seriesId: "iphone-13", name: "iPhone 13 mini", storage: "128 Go", price: 180000, inStock: true, rating: 4.4, image: gsmImage("apple-iphone-13-mini.jpg") },
  { id: "iphone-13-pro", seriesId: "iphone-13", name: "iPhone 13 Pro", storage: "256 Go", price: 390000, inStock: true, rating: 4.7, image: gsmImage("apple-iphone-13-pro.jpg") },
  { id: "iphone-13-pro-max", seriesId: "iphone-13", name: "iPhone 13 Pro Max", storage: "256 Go", price: 450000, inStock: true, rating: 4.8, image: gsmImage("apple-iphone-13-pro-max.jpg") },

  // iPhone 12 — 2020
  { id: "iphone-12", seriesId: "iphone-12", name: "iPhone 12", storage: "64 Go", price: 190000, inStock: true, rating: 4.4, image: gsmImage("apple-iphone-12.jpg") },
  { id: "iphone-12-mini", seriesId: "iphone-12", name: "iPhone 12 mini", storage: "64 Go", price: 300000, inStock: true, rating: 4.3, image: gsmImage("apple-iphone-12-mini.jpg") },
  { id: "iphone-12-pro", seriesId: "iphone-12", name: "iPhone 12 Pro", storage: "128 Go", price: 450000, inStock: false, rating: 4.5, image: gsmImage("apple-iphone-12-pro.jpg") },
  { id: "iphone-12-pro-max", seriesId: "iphone-12", name: "iPhone 12 Pro Max", storage: "128 Go", price: 500000, inStock: true, rating: 4.6, image: gsmImage("apple-iphone-12-pro-max.jpg") },

  // iPhone 11 — 2019
  { id: "iphone-11", seriesId: "iphone-11", name: "iPhone 11", storage: "64 Go", price: 150000, inStock: true, rating: 4.3, image: gsmImage("apple-iphone-11.jpg") },
  { id: "iphone-11-pro", seriesId: "iphone-11", name: "iPhone 11 Pro", storage: "64 Go", price: 190000, inStock: true, rating: 4.4, image: gsmImage("apple-iphone-11-pro.jpg") },
  { id: "iphone-11-pro-max", seriesId: "iphone-11", name: "iPhone 11 Pro Max", storage: "64 Go", price: 250000, inStock: true, rating: 4.5, image: gsmImage("apple-iphone-11-pro-max.jpg") },

  // iPhone X — 2017 (11e génération : X, XS, XS Max, XR, et le 8 Plus qui l'accompagnait)
  { id: "iphone-8-plus", seriesId: "iphone-x", name: "iPhone 8 Plus", storage: "64 Go", price: 35000, inStock: true, rating: 4.0, image: gsmImage("apple-iphone-8-plus-new.jpg") },
  { id: "iphone-x", seriesId: "iphone-x", name: "iPhone X", storage: "64 Go", price: 55000, inStock: true, rating: 4.1, image: gsmImage("apple-iphone-x.jpg") },
  { id: "iphone-xr", seriesId: "iphone-x", name: "iPhone XR", storage: "64 Go", price: 65000, inStock: true, rating: 4.2, image: gsmImage("apple-iphone-xr-new.jpg") },
  { id: "iphone-xs", seriesId: "iphone-x", name: "iPhone XS", storage: "64 Go", price: 700000, inStock: false, rating: 4.2, image: gsmImage("apple-iphone-xs-new.jpg") },
  { id: "iphone-xs-max", seriesId: "iphone-x", name: "iPhone XS Max", storage: "64 Go", price: 85000, inStock: true, rating: 4.3, image: gsmImage("apple-iphone-xs-max-new1.jpg") },

  // iPhone SE
  { id: "iphone-se-2022", seriesId: "iphone-se", name: "iPhone SE (2022)", storage: "64 Go", price: 90000, inStock: true, rating: 4.3, image: commonsImage("Apple iPhone SE.jpg") },
  { id: "iphone-se-2020", seriesId: "iphone-se", name: "iPhone SE (2020)", storage: "64 Go", price: 75000, inStock: true, rating: 4.1, image: commonsImage("Apple iPhone SE.jpg") },
];

export const formatFCFA = (value) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(value) + " FCFA";
