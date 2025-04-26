
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">BurnCalc</h3>
            <p className="text-gray-600">
              Accurate calorie calculators for all your fitness activities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li><a href="/about" className="hover:text-primary">About</a></li>
              <li><a href="#calculators" className="hover:text-primary">Calculators</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-600 text-sm">
              The calculators provided are for informational purposes only. 
              Individual results may vary. Consult with a healthcare professional 
              before starting any fitness program.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          © {currentYear} BurnCalc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
