import { GeistSans } from 'geist/font/sans';
import { ReactNode } from 'react';
import Layout from '../components/layout';
import Providers from './providers';

import './globals.css';

export const metadata = {
  title: {
    default: 'Partnersense',
    template: `%s | Partnersense`
  }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="se" className={GeistSans.variable}>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
