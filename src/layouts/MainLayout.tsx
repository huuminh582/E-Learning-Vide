import React from 'react';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <main className="flex-grow">
        {children}
      </main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
