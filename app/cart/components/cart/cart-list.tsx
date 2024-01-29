import React, { useContext } from 'react';
import CartItem from './cart-item';
import { CartContext, Product } from '../../page';

type CartListProps = { products: Product[] };

export default function CartList({ products }: CartListProps) {
  const context = useContext(CartContext);
  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7">
      <h2 id="cart-heading" className="text-xl font-bold tracking-tight text-gray-900">
        { context?.empty ? "Your cart is empty" : "Items in your shopping cart"}
      </h2>
      <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
        {products.map((product, productIdx) => (
          <li key={productIdx}>
            <CartItem product={product}/>
          </li>
        ))}
      </ul>
    </section>
  );
}
