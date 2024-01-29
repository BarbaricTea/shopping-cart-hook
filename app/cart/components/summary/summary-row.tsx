import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import { CartContext } from 'app/cart/page';
import Link from 'next/link';
import React, { useContext } from 'react';
import { SummaryRowData } from './summary-card';

type SummaryRowProp = { summary: SummaryRowData };

export default function SummaryRow({ summary }: SummaryRowProp) {
  const context = useContext(CartContext);
  return (
    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
      <dt className={`flex items-center ${summary.bold ? 'text-base font-medium text-gray-900' : 'text-sm text-gray-600'}`}>
        <span>{summary.title}</span>
        {summary.link ? (
          <Link href="/#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
            <span className="sr-only">{summary.link.text}</span>
            <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
        ) : undefined}
      </dt>
      <dd className={`font-medium text-gray-900 ${summary.bold ? 'text-base' : 'text-sm'}`}>
        {summary.cost} {context?.currecy}
      </dd>
    </div>
  );
}
