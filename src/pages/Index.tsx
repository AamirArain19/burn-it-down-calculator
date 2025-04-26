
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CalculatorCard from '../components/CalculatorCard';
import { 
  PersonStanding as WalkingIcon, 
  // The correct icon for running in Lucide is 'Running'
  Running as RunningIcon, 
  Bike as CycleIcon, 
  Waves as SwimmingIcon, 
  Dumbbell, 
  Activity as ActivityIcon, 
  Smile as YogaIcon, 
  Home, 
  Mountain,
  Calculator 
} from 'lucide-react';

const Index = () => {
  const calculators = [
    {
      title: 'Walking Calorie Calculator',
      description: 'Calculate calories burned while walking based on speed, incline, and weight.',
      icon: WalkingIcon,
      path: '/walking',
    },
    {
      title: 'Running Calorie Calculator',
      description: 'Compare treadmill vs. outdoor running calorie burn based on pace and terrain.',
      icon: RunningIcon,
      path: '/running',
    },
    {
      title: 'Cycling Calorie Calculator',
      description: 'Estimate calories burned cycling on roads and stationary bikes.',
      icon: CycleIcon,
      path: '/cycling',
    },
    {
      title: 'Swimming Calorie Calculator',
      description: 'Calculate calorie burn for different swimming strokes and intensities.',
      icon: SwimmingIcon,
      path: '/swimming',
    },
    {
      title: 'Weightlifting Calorie Calculator',
      description: 'Measure calories burned during strength training and cardio workouts.',
      icon: Dumbbell,
      path: '/weightlifting',
    },
    {
      title: 'HIIT vs. Steady-State Calculator',
      description: 'Compare calorie burn between intense intervals and continuous cardio.',
      icon: ActivityIcon,
      path: '/hiit',
    },
    {
      title: 'Yoga & Pilates Calorie Calculator',
      description: 'Estimate calories burned during various yoga and pilates practices.',
      icon: YogaIcon,
      path: '/yoga',
    },
    {
      title: 'Household Chores Calculator',
      description: 'Calculate calories burned during everyday activities like cleaning and gardening.',
      icon: Home,
      path: '/household',
    },
    {
      title: 'Hiking Calorie Calculator',
      description: 'Measure calorie burn on trails based on terrain, pack weight, and elevation.',
      icon: Mountain,
      path: '/hiking',
    },
    {
      title: 'Non-Exercise Activity Calculator',
      description: 'Track calories burned from everyday movements like standing, fidgeting, and shopping.',
      icon: Calculator,
      path: '/neat',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-primary to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Burn Calorie Calculator</h1>
              <p className="text-xl mb-8">
                Accurately track calories burned across 10 different activities
              </p>
              <a 
                href="#calculators" 
                className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Start Calculating
              </a>
            </div>
          </div>
        </section>

        {/* Calculators grid */}
        <section id="calculators" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Calorie Calculator</h2>
            <div className="calculator-grid">
              {calculators.map((calc, index) => (
                <CalculatorCard 
                  key={index}
                  title={calc.title}
                  description={calc.description}
                  icon={calc.icon}
                  path={calc.path}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Track Calories Burned?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
                <p className="text-gray-600">Monitor your fitness journey by keeping track of your calorie expenditure over time.</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Optimize Workouts</h3>
                <p className="text-gray-600">Find the most effective exercises for your specific goals based on calorie burn efficiency.</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Balance Nutrition</h3>
                <p className="text-gray-600">Plan your diet around your activity levels to achieve better weight management results.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
