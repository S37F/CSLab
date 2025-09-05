import React from 'react';

type Page = 'simulator' | 'about' | 'contact';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const NavButton: React.FC<{ page: Page, currentPage: Page, onNavigate: (page: Page) => void, children: React.ReactNode }> = ({ page, currentPage, onNavigate, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => onNavigate(page)}
      className={`text-sm font-medium transition-colors hover:text-text-primary ${isActive ? 'text-text-primary' : 'text-text-secondary'}`}
    >
      {children}
       {isActive && <div className="h-0.5 bg-accent-primary mt-1"></div>}
    </button>
  );
};

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  return (
    <header className="bg-background-secondary/80 backdrop-blur-sm border-b border-border px-4 lg:px-6 h-16 flex items-center justify-between sticky top-0 z-50 flex-shrink-0">
      <button className="flex items-center justify-center cursor-pointer" onClick={() => onNavigate('simulator')}>
        <h1 className="text-2xl font-bold text-text-primary">
          <span className="text-accent-primary">CS</span>Lab
        </h1>
      </button>
      <nav className="flex gap-4 sm:gap-6">
        <NavButton page="simulator" currentPage={currentPage} onNavigate={onNavigate}>Simulator</NavButton>
        <NavButton page="about" currentPage={currentPage} onNavigate={onNavigate}>About</NavButton>
        <NavButton page="contact" currentPage={currentPage} onNavigate={onNavigate}>Contact</NavButton>
      </nav>
    </header>
  );
};

export default Navbar;