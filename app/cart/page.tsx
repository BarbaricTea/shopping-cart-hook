'use client';

import Summary from './components/summary/summary-card';
import CartList from './components/cart/cart-list';
import { useCart } from 'react-use-cart';
import { createContext, useEffect, useState } from 'react';

export interface Product extends Item {
  inStock: boolean;
  imageAlt: string;
  imageSrc: string;
  name: string;
  href?: string;
  leadTime?: string;
}

// Interface matching CartProvider
export interface Item {
  id: string;
  price: number;
  quantity: number;
  itemTotal: number;
}

enum currencies {
  default = 'SEK',
  SEK = 'SEK',
  NOK = 'NOK',
  EUR = 'EUR'
}

// TODO: Read in currency from navbar, maybe add converter
// Question: would it be more relevant to store currency in metadata for react-use-hook instead of own provider?
export interface CartContextProps {
  currecy: currencies;
  empty: boolean;
}

export const CartContext = createContext<CartContextProps | null>(null);

export default function CartPage() {
  const {items, isEmpty, updateItem } = useCart();
  const [isDoneRendering, setRenderDone] = useState(false);

  useEffect(() => {
    if (!isDoneRendering) {
      setRenderDone(true);
      // Remove currency from price, making cartTotal hook work
      items.map((item) => {
        updateItem(item.id, { ...item, price: parseInt(item.price.toString().replace(/\D/g, '')) });
      });
    }
  }, [items, isDoneRendering]);

  return (
    isDoneRendering && <CartContext.Provider
      value={{
        currecy: currencies.default,
        empty: isEmpty,
      }}
    >
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          {/* Cart list */}
          <CartList products={items as Product[]} />
          {/* Order summary */}
          <Summary />
        </form>
      </main>
    </CartContext.Provider>
  );
}
