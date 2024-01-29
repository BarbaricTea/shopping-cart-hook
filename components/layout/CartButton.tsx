'use client';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useCart } from 'react-use-cart';

export default function CartButton() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart" className="group -m-2 flex items-center p-2">
      <ShoppingBagIcon
        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        aria-hidden="true"
      />
      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
        {totalItems}
      </span>
      <span className="sr-only">items in cart, view bag</span>
    </Link>
  );
}
