import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "panier:v1";

function loadInitialState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { items: JSON.parse(raw) };
  } catch (err) {
    console.warn("Impossible de lire le panier enregistré :", err);
  }
  return { items: [] };
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity = 1 } = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }

      return { items: [...state.items, { ...product, quantity }] };
    }

    case "REMOVE_ITEM":
      return { items: state.items.filter((item) => item.id !== action.payload.id) };

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity < 1) {
        return { items: state.items.filter((item) => item.id !== id) };
      }
      return {
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      };
    }

    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, loadInitialState);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch (err) {
      console.warn("Impossible d'enregistrer le panier :", err);
    }
  }, [state.items]);

  const addItem = (product, quantity = 1) =>
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: { id } });
  const updateQuantity = (id, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const totals = useMemo(() => {
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal === 0 ? 0 : subtotal >= 50 ? 0 : 4.99;
    const total = subtotal + shipping;
    return { itemCount, subtotal, shipping, total };
  }, [state.items]);

  const value = { items: state.items, addItem, removeItem, updateQuantity, clearCart, ...totals };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
}