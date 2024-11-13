import MainHeader from '@/components/main-header/main-header';
import React from 'react';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: React.ReactNode,
};
