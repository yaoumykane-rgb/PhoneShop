// Construit une URL d'image stable vers Wikimedia Commons à partir du nom de
// fichier exact (Special:FilePath est le mécanisme officiel de hotlink de
// Commons — il redirige vers le fichier réel quel que soit son chemin de
// hachage interne). Toutes les photos utilisées ici sont de vrais iPhone.
export const commonsImage = (filename, width = 800) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${filename.replace(/ /g, "_")}?width=${width}`;
