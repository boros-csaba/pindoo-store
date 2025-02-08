'use client'

import { createContext, useState } from 'react'

interface CartState {
  items: CartItem[];
  updateCart: (items: CartItem[]) => void;
}

interface CartItem {
  id: string;
  quantity: number;
}

export const CartContext = createContext<CartState | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<CartState>({ 
    items: [],
    updateCart: (items: CartItem[]) => {
      setState({ ...state, items });
    }
  });

  return (
    <CartContext.Provider value={state}>
      {children}
    </CartContext.Provider>
  )
}