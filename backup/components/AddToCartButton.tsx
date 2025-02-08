"use client";

import { CartContext } from "@/app/cart-provider";
import { useContext } from "react";

export default function AddToCartButton({ productId }: { productId: string }) {
  const cart = useContext(CartContext);

  function addItemToCart(productId: string) {

    let existingItem = cart?.items.find((cartItem) => cartItem.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
      return cart?.updateCart([...cart.items]);
    }
    
    let newItem = {
      id: productId,
      quantity: 1,
      name: "Napi rutin tábla",
      price: 8900,
    };
    
    return cart?.updateCart([...cart.items, newItem]);
  }

  return <button className="btn btn-secondary" onClick={() => addItemToCart(productId)}>Kosárba</button>;
}


