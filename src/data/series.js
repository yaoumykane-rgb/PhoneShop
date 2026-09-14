import { gsmImage } from "../utils/gsmImage.js";
import { commonsImage } from "../utils/commonsImage.js";

// Chaque série est une "catégorie" affichée sur /categories. `finish` reprend
// une vraie teinte de finition Apple pour cette génération — utilisée comme
// accent de la carte et du bandeau série. `image` est une vraie photo produit
// (studio, fond neutre) du modèle Pro/phare de la série.
export const series = [
  {
    id: "iphone-16",
    name: "iPhone 16",
    year: "2024",
    tagline: "Puce A18, bouton Action, Apple Intelligence",
    finishName: "Titane naturel",
    finish: "#8a8d91",
    image: gsmImage("apple-iphone-16-pro.jpg"),
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    year: "2023",
    tagline: "Dynamic Island, USB-C, appareil photo 48 Mpx",
    finishName: "Bleu titane",
    finish: "#53637a",
    image: gsmImage("apple-iphone-15-pro.jpg"),
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    year: "2022",
    tagline: "Mode SOS, sécurité renforcée, grand écran",
    finishName: "Minuit",
    finish: "#1b1d22",
    image: gsmImage("apple-iphone-14-pro.jpg"),
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    year: "2021",
    tagline: "Mode Cinématique, autonomie améliorée",
    finishName: "Lumière stellaire",
    finish: "#8a7f6d",
    image: gsmImage("apple-iphone-13-pro.jpg"),
  },
  {
    id: "iphone-12",
    name: "iPhone 12",
    year: "2020",
    tagline: "5G, châssis en aluminium aéronautique",
    finishName: "Bleu Pacifique",
    finish: "#33475b",
    image: gsmImage("apple-iphone-12-pro.jpg"),
  },
  {
    id: "iphone-11",
    name: "iPhone 11",
    year: "2019",
    tagline: "Excellent rapport qualité-prix, très demandé",
    finishName: "Violet",
    finish: "#8e7cc3",
    image: gsmImage("apple-iphone-11.jpg"),
  },
  {
    id: "iphone-x",
    name: "iPhone X",
    year: "2017",
    tagline: "La révolution sans bouton Accueil : X, XS, XR",
    finishName: "Gris sidéral",
    finish: "#4b4d52",
    image: gsmImage("apple-iphone-x.jpg"),
  },
  {
    id: "iphone-se",
    name: "iPhone SE",
    year: "2022",
    tagline: "Format compact, puce A15, Touch ID",
    finishName: "(PRODUCT)RED",
    finish: "#b1191f",
    image: commonsImage("Apple iPhone SE.jpg"),
  },
];

export const getSeriesById = (id) => series.find((s) => s.id === id);
