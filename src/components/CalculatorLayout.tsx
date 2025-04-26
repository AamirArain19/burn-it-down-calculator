
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CalculatorLayoutProps {
  title: string;
  icon: React.ReactNode;
  children: ReactNode;
  content: ReactNode;
}

const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({ title, icon, children, content }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Calculators
          </Link>
          <div className="flex items-center space-x-2">
            {icon}
            <h1 className="text-3xl font-bold">{title}</h1>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6 h-fit">
            {children}
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {content}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalculatorLayout;
