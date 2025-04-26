
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ title, description, icon: Icon, path }) => {
  return (
    <div className="calculator-card animate-fade-in">
      <div className="calculator-header">
        <Icon className="h-6 w-6" />
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div className="calculator-card-content">
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={path}
          className="inline-block bg-primary text-white px-4 py-2 rounded-md 
                    hover:bg-primary/80 transition-colors"
        >
          Calculate Now
        </Link>
      </div>
    </div>
  );
};

export default CalculatorCard;
