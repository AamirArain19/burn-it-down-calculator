
import React from 'react';
import { Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Calculator className="h-8 w-8 text-white" />
          <h1 className="text-2xl font-bold text-white">Calorie Calculator</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-primary-foreground/80">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-primary-foreground/80">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
