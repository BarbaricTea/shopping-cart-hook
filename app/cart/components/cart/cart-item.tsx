import { CheckIcon, ClockIcon, XMarkIcon as XMarkIconSolid } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
import React, { useContext } from 'react';
import { CartContext, Product } from '../../page';
import { useCart } from 'react-use-cart';

type ProductProp = { product: Product };

export default function cartItem({ product }: ProductProp) {
  const { updateItemQuantity, removeItem } = useCart();
  const context = useContext(CartContext);

  return (
    <section className="flex py-6 sm:py-10">
      {product.imageSrc && product.imageAlt ? (
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={192}
          height={192}
          sizes="(max-width: 192px)"
          priority
          className="flex-shrink-0 rounded-md object-cover object-center sm:h-48 sm:w-48"
        />
      ) : null}

      <div className="relative ml-4 flex flex-1 flex-col justify-between pr-9 sm:ml-6 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
        {/* Name, price, total price */}
        <div className="grid content-between">
          <div>
            <h3 className="text-sm">
              {product.href ? (
                <Link href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                  {product.name}
                </Link>
              ) : (
                <>{product.name}</>
              )}
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {product.price} {context?.currecy}
            </p>
            {product.quantity > 1 ? (
              <p className="mt-1 text-sm font-medium text-gray-900">
                Total: {product.price * product.quantity} {context?.currecy}
              </p>
            ) : null}
          </div>
          <p className="mt-4 flex space-x-2 text-sm text-gray-700">
            {product.inStock ? (
              <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
            ) : (
              <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
            )}
            <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
          </p>
        </div>

        {/* Selector for quantity */}
        <div className="mt-4 sm:mt-0 sm:pr-9">
          <select
            id={`quantity-${product}`}
            name={`quantity-${product}`}
            defaultValue={product.quantity}
            className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            onChange={(event) => updateItemQuantity(product.id, parseInt(event.target.value))}
          >
            {[...Array(10)].map((option, index) =>
              index > 0 ? (
                <option key={index} value={index}>
                  {index}
                </option>
              ) : null
            )}
          </select>
        </div>

        {/* Remove cart item */}
        <button
          type="button"
          className="absolute right-0 top-0 -m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
          onClick={() => removeItem(product.id)}
        >
          <span className="sr-only">Remove</span>
          <XMarkIconSolid className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
