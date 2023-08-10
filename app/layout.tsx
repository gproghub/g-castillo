import './globals.css';
import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import Navbar from '@/components/navbar';

const kanit = Kanit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={kanit.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
