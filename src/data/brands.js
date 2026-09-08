// data/brands.js
// Données de démonstration. À remplacer par un appel API / Supabase plus tard.

export const brands = [
  {
    id: "apple",
    name: "Apple",
    logo: "/logos/apple.png",
    phones: [
      { id: "iphone-15", name: "iPhone 15", price: 650000, image: "/phones/iphone-15.jpg" },
      { id: "iphone-14", name: "iPhone 14", price: 520000, image: "/phones/iphone-14.jpg" },
      { id: "iphone-13", name: "iPhone 13", price: 420000, image: "/phones/iphone-13.jpg" },
    ],
  },
  {
    id: "samsung",
    name: "Samsung",
    logo: "/logos/samsung.png",
    phones: [
      { id: "galaxy-s24", name: "Galaxy S24", price: 580000, image: "/phones/galaxy-s24.jpg" },
      { id: "galaxy-a54", name: "Galaxy A54", price: 220000, image: "/phones/galaxy-a54.jpg" },
      { id: "galaxy-a14", name: "Galaxy A14", price: 110000, image: "/phones/galaxy-a14.jpg" },
    ],
  },
  {
    id: "tecno",
    name: "Tecno",
    logo: "/logos/tecno.png",
    phones: [
      { id: "camon-20", name: "Camon 20", price: 130000, image: "/phones/camon-20.jpg" },
      { id: "spark-10", name: "Spark 10", price: 85000, image: "/phones/spark-10.jpg" },
    ],
  },
  {
    id: "infinix",
    name: "Infinix",
    logo: "/logos/infinix.png",
    phones: [
      { id: "hot-40", name: "Hot 40", price: 95000, image: "/phones/hot-40.jpg" },
      { id: "note-30", name: "Note 30", price: 140000, image: "/phones/note-30.jpg" },
    ],
  },
];

// Liste plate de tous les téléphones, avec le nom de la marque rattaché
export const allPhones = brands.flatMap((brand) =>
  brand.phones.map((phone) => ({ ...phone, brandId: brand.id, brandName: brand.name }))
);