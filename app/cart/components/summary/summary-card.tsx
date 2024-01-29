import React, { useContext } from 'react';
import Link from 'next/link';
import { useCart } from 'react-use-cart';
import { CartContext } from '../../page';
import SummaryRow from './summary-row';

export interface Link {
  href: string;
  text: string;
}

export interface SummaryRowData {
  title: string;
  link?: Link;
  cost?: number;
  bold?: boolean;
}

// Did not find any data to make this more dynamic
export const estimatedCosts = {
  shipping: 50,
  taxes: 150
};

export default function Summary() {
  const { cartTotal, emptyCart } = useCart();
  const context = useContext(CartContext);

  // Wanted to break this out to data file, but did not find a good way to use cartTotal this way.
  const summaryData = [
    {
      title: 'Subtotal',
      cost: cartTotal
    },
    {
      title: 'Shipping estimate',
      link: {
        href: '/#',
        text: 'Learn more about how shipping is calculated'
      },
      cost: context?.empty ? 0 : estimatedCosts.shipping
    },
    {
      title: 'Tax estimate',
      link: {
        href: '/#',
        text: 'Learn more about how tax is calculated'
      },
      cost: context?.empty ? 0 : estimatedCosts.taxes
    },
    {
      title: 'Order total',
      cost: context?.empty ? 0 : cartTotal + estimatedCosts.shipping + estimatedCosts.taxes,
      bold: true,
    }
  ] as SummaryRowData[];

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>
      <dl className="mt-6 space-y-4">
        {/* Subtotal, tax estimate, shipping estimate, order total */}
        {summaryData.map((row, index) => (
          <SummaryRow key={index} summary={row} />
        ))}
      </dl>

      <Link
        onClick={() => emptyCart()}
        href="/"
        type="submit"
        className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-center text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Checkout
      </Link>
    </section>
  );
}
