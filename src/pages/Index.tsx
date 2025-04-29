
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CalculatorCard from '../components/CalculatorCard';
import { 
  PersonStanding as WalkingIcon, 
  // We need to use an icon that actually exists in lucide-react
  Activity as RunningIcon, 
  Bike as CycleIcon, 
  Waves as SwimmingIcon, 
  Dumbbell, 
  Activity, 
  Smile as YogaIcon, 
  Home, 
  Mountain,
  Calculator,
  Flame,
  BarChart,
  Heart 
} from 'lucide-react';

import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/table';

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
      icon: Activity,
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
                Accurately track calories burned across different activities
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

        {/* New intro section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="prose prose-lg max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Calories Burned Calculator: Estimate Exercise Energy Expenditure</h2>
              <p className="text-lg mb-8">
                Want to know exactly how many calories you're burning during workouts? Our scientifically-validated 
                Calories Burned Calculator helps you estimate energy expenditure based on your weight, activity type, 
                and duration. Whether you're walking, running, cycling, or doing HIIT, this tool gives you personalized 
                results to optimize your fitness and weight loss goals.
              </p>
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

        {/* How it works section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">How the Calories Burned Calculator Works</h2>
              <p className="text-lg mb-6">
                Our calculator uses the gold-standard MET (Metabolic Equivalent of Task) method recommended by the American 
                College of Sports Medicine. The simple formula is:
              </p>
              <div className="bg-primary/10 p-6 rounded-lg text-center mb-8">
                <p className="text-xl font-bold text-primary">Calories Burned = MET × Weight (kg) × Time (hours)</p>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Understanding MET Values</h3>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li><span className="font-medium">Light activities (2-3 METs):</span> Slow walking, gentle yoga, household chores</li>
                <li><span className="font-medium">Moderate activities (3-6 METs):</span> Brisk walking, recreational swimming, doubles tennis</li>
                <li><span className="font-medium">Vigorous activities (6+ METs):</span> Running, HIIT, competitive sports</li>
              </ul>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold mb-2">Example calculation:</h4>
                <p>A 155-lb (70 kg) person running for 30 minutes (0.5 hours) at 8 METs burns:</p>
                <p className="font-bold mt-2">8 × 70 × 0.5 = 280 calories</p>
              </div>
            </div>
          </div>
        </section>

        {/* Activity calorie table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Calories Burned by Common Activities</h2>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Activity</TableHead>
                      <TableHead>30 Min (155 lbs)</TableHead>
                      <TableHead>60 Min (155 lbs)</TableHead>
                      <TableHead>Intensity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Walking (3.5 mph)</TableCell>
                      <TableCell>140 kcal</TableCell>
                      <TableCell>280 kcal</TableCell>
                      <TableCell>Moderate</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Running (6 mph)</TableCell>
                      <TableCell>300 kcal</TableCell>
                      <TableCell>600 kcal</TableCell>
                      <TableCell>Vigorous</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Cycling (12 mph)</TableCell>
                      <TableCell>260 kcal</TableCell>
                      <TableCell>520 kcal</TableCell>
                      <TableCell>Vigorous</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Swimming (laps)</TableCell>
                      <TableCell>220 kcal</TableCell>
                      <TableCell>440 kcal</TableCell>
                      <TableCell>Vigorous</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Hatha Yoga</TableCell>
                      <TableCell>90 kcal</TableCell>
                      <TableCell>180 kcal</TableCell>
                      <TableCell>Light</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>HIIT Workout</TableCell>
                      <TableCell>310 kcal</TableCell>
                      <TableCell>620 kcal</TableCell>
                      <TableCell>Very Vigorous</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">Data sourced from 2011 Compendium of Physical Activities</p>
            </div>
          </div>
        </section>

        {/* How to use steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">How to Use This Calculator in 3 Simple Steps</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-primary text-lg">1</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Select Your Activity</h3>
                  <p>Choose from our comprehensive list of 50+ exercises</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-primary text-lg">2</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Enter Your Details</h3>
                  <ul className="text-left">
                    <li>• Weight (in lbs or kg)</li>
                    <li>• Exercise duration</li>
                    <li>• Optional: Age & gender</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-primary text-lg">3</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Get Instant Results</h3>
                  <ul className="text-left">
                    <li>• Total calories burned</li>
                    <li>• Equivalent in food calories</li> 
                    <li>• Weekly totals if repeated</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg mt-8 text-center">
                <p className="font-medium">
                  <strong>Pro Tip:</strong> For weight loss, combine exercise with our TDEE Calculator to create the perfect calorie deficit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Factors section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">5 Key Factors That Affect Calorie Burn</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded mr-3">
                      <Flame className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">Body Weight</h3>
                  </div>
                  <p>Heavier individuals burn more calories - about 5-8% more per 10 lbs of additional weight</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded mr-3">
                      <Activity className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">Exercise Intensity</h3>
                  </div>
                  <p>Doubling your speed can increase calorie burn by 50-100%</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded mr-3">
                      <Dumbbell className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">Muscle Mass</h3>
                  </div>
                  <p>Each pound of muscle burns 6-10 calories/day at rest versus 2 calories for fat</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded mr-3">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">Fitness Level</h3>
                  </div>
                  <p>Trained athletes burn 10-20% fewer calories for the same activity due to efficiency</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded mr-3">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">Afterburn Effect</h3>
                  </div>
                  <p>HIIT can increase calorie burn for 14-48 hours post-workout (EPOC)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Weight loss section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Calories Burned vs. Weight Loss: The Math</h2>
              <p className="text-lg mb-6">
                To lose 1 pound per week, you need a 3,500 calorie deficit. Here's how to achieve it:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li><span className="font-medium">Exercise Approach:</span> Burn 500 calories/day through activity</li>
                <li><span className="font-medium">Combination Approach:</span> Burn 250 calories + eat 250 calories less</li>
                <li><span className="font-medium">Lifestyle Approach:</span> Increase NEAT (non-exercise activity) + make small dietary changes</li>
              </ul>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold mb-4">Sample Plan for 155-lb Person:</h4>
                <ul className="space-y-2">
                  <li><span className="font-medium">Morning:</span> 30-min run (300 kcal)</li>
                  <li><span className="font-medium">Evening:</span> 45-min brisk walk (200 kcal)</li>
                  <li><span className="font-medium">Total:</span> 500 kcal/day deficit → 1 lb/week loss</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">How accurate are calorie calculators?</h3>
                  <p className="mb-3">
                    Most quality calculators are 80-90% accurate for general estimates. For greater precision:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Use heart rate monitors (+5-10% accuracy)</li>
                    <li>Consider metabolic testing (most accurate)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Which exercise burns the most calories?</h3>
                  <p className="mb-3">Per minute, these are most effective:</p>
                  <ol className="list-decimal pl-6">
                    <li>Running (600-1000 kcal/hr)</li>
                    <li>Jump rope (700-900 kcal/hr)</li>
                    <li>HIIT (500-800 kcal/hr)</li>
                    <li>Swimming (500-700 kcal/hr)</li>
                  </ol>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Does muscle really burn more calories?</h3>
                  <p className="mb-3">Yes! Adding 5 lbs of muscle can increase your:</p>
                  <ul className="list-disc pl-6">
                    <li>Resting calorie burn by 30-50 kcal/day</li>
                    <li>Exercise calorie burn by 5-10%</li>
                  </ul>
                </div>
              </div>
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
        
        {/* Final CTA section */}
        <section className="py-16 bg-gradient-to-r from-primary to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Take Your Fitness to the Next Level</h2>
              <p className="text-lg mb-8">
                Pair your calorie burn insights with our other powerful calculators.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/" className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
                  Start Calculating Now
                </Link>
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
