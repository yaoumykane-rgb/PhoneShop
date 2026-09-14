import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('cart');

    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        name: 'iPhone 15',
        price: 650000,
        quantity: 1,
      },
      {
        id: 2,
        name: 'Samsung Galaxy S24',
        price: 550000,
        quantity: 1,
      },
      {
        id: 3,
        name: 'Xiaomi Redmi Note 13',
        price: 250000,
        quantity: 1,
      },
    ];
  });

  const [checkoutData, setCheckoutData] = useState(() => {
    const saved = localStorage.getItem('checkoutData');

    return saved ? JSON.parse(saved) : {};
  });

  const [deliveryOption, setDeliveryOption] = useState(() => {
    return localStorage.getItem('deliveryOption') || 'standard';
  });

  // Sauvegarder le panier
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  // Sauvegarder les informations client
  useEffect(() => {
    localStorage.setItem(
      'checkoutData',
      JSON.stringify(checkoutData)
    );
  }, [checkoutData]);

  // Sauvegarder le mode de livraison
  useEffect(() => {
    localStorage.setItem(
      'deliveryOption',
      deliveryOption
    );
  }, [deliveryOption]);

  // Total des produits
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Frais de livraison
  const deliveryCost =
    deliveryOption === 'express' ? 5000 : 2500;

  // Total final
  const grandTotal = total + deliveryCost;

  // Nouvelle commande
  const clearCart = () => {
    // Vider le panier
    setItems([]);

    // Effacer les informations du client
    setCheckoutData({});

    // Remettre la livraison standard
    setDeliveryOption('standard');

    // Supprimer les anciennes données
    localStorage.removeItem('cart');
    localStorage.removeItem('checkoutData');
    localStorage.removeItem('deliveryOption');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,

        checkoutData,
        setCheckoutData,

        deliveryOption,
        setDeliveryOption,

        total,
        deliveryCost,
        grandTotal,

        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);