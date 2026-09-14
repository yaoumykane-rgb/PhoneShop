// Vraies photos produit (studio, fond neutre) — une par modèle exact.
export const gsmImage = (slug) => `https://fdn2.gsmarena.com/vv/bigpic/${slug}`;

// Filet de sécurité : si une photo ne charge pas, on bascule sur un visuel
// neutre plutôt que l'icône "image cassée" du navigateur — jamais de détail
// qui casse le rendu professionnel de la grille.
export const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 700 700">
      <rect width="700" height="700" fill="#F1F2F5"/>
      <rect x="275" y="180" width="150" height="340" rx="22" fill="none" stroke="#C7CAD3" stroke-width="6"/>
      <circle cx="350" cy="470" r="10" fill="#C7CAD3"/>
      <rect x="305" y="205" width="90" height="6" rx="3" fill="#C7CAD3"/>
    </svg>
  `);

export const withImageFallback = (e) => {
  if (e.currentTarget.src !== FALLBACK_IMAGE) {
    e.currentTarget.src = FALLBACK_IMAGE;
  }
};
