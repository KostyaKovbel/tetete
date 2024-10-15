import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AppLayout from './components/AppLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js with Core UI',
  description: 'A Next.js app using Core UI components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}