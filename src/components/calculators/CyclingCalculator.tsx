
import React, { useState } from 'react';
import { Bike } from 'lucide-react';
import { calculateCalories, MET } from '../../utils/calculatorUtils';
import CalculatorLayout from '../CalculatorLayout';

const CyclingCalculator = () => {
  const [weight, setWeight] = useState<number>(70);
  const [isKg, setIsKg] = useState<boolean>(true);
  const [intensity, setIntensity] = useState<string>('moderate');
  const [isStationary, setIsStationary] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(45);
  const [calories, setCalories] = useState<number | null>(null);

  const calculateCyclingCalories = () => {
    // Get base MET value from cycling intensity
    let baseMet;
    if (isStationary) {
      baseMet = MET.cycling.stationary;
    } else {
      switch (intensity) {
        case 'light':
          baseMet = MET.cycling.light;
          break;
        case 'moderate':
          baseMet = MET.cycling.moderate;
          break;
        case 'vigorous':
          baseMet = MET.cycling.vigorous;
          break;
        default:
          baseMet = MET.cycling.moderate;
      }
    }
    
    const result = calculateCalories(weight, baseMet, duration, isKg);
    setCalories(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCyclingCalories();
  };
  
  const cyclingContent = (
    <div className="blog-content">
      <h2>Cycling Calorie Calculator: Estimate Your Burned Calories Easily</h2>
      <p>
        Are you curious about how many calories you burn while cycling? Our Cycling Calorie Calculator 
        helps you track energy expenditure based on speed, distance, weight, and terrain. Whether 
        you're a casual rider or a competitive cyclist, this tool can help you optimize your workouts and 
        fitness goals!
      </p>
      
      <h3>How Does a Cycling Calorie Calculator Work?</h3>
      <p>Calories burned during cycling depend on several key factors:</p>
      <ul>
        <li><strong>Body Weight</strong> – Heavier individuals burn more calories.</li>
        <li><strong>Cycling Speed & Intensity</strong> – Faster rides increase calorie burn.</li>
        <li><strong>Duration</strong> – Longer sessions expend more energy.</li>
        <li><strong>Terrain & Resistance</strong> – Uphill cycling burns more calories than flat roads.</li>
      </ul>
      
      <p>
        Our calculator uses the MET (Metabolic Equivalent of Task) formula for accuracy:
      </p>
      <p className="bg-gray-100 p-3 rounded">
        Calories Burned = MET × Weight (kg) × Time (hours)
      </p>
      
      <h3>Benefits of Tracking Cycling Calories</h3>
      <ul>
        <li>✅ Weight Management – Helps maintain a calorie deficit for fat loss.</li>
        <li>✅ Performance Tracking – Adjust training intensity based on energy output.</li>
        <li>✅ Motivation Boost – Seeing progress encourages consistency.</li>
        <li>✅ Nutrition Planning – Balance calorie intake with cycling workouts.</li>
      </ul>
      
      <h3>Tips to Maximize Calorie Burn While Cycling</h3>
      <ul>
        <li><strong>Try Interval Training</strong> – Alternate between sprints and recovery periods.</li>
        <li><strong>Cycle Uphill</strong> – Increases resistance and burns more calories.</li>
        <li><strong>Increase Distance Gradually</strong> – Build endurance and energy expenditure.</li>
        <li><strong>Use a Heart Rate Monitor</strong> – Tracks effort levels for better calorie estimates.</li>
      </ul>
      
      <h3>Frequently Asked Questions (FAQs)</h3>
      <h4 className="font-semibold mt-4">1. How accurate is a cycling calorie calculator?</h4>
      <p>
        While calculators provide estimates, factors like wind resistance, bike type, and individual 
        metabolism can affect accuracy. Wearable trackers may offer more precise data.
      </p>
      
      <h4 className="font-semibold mt-4">2. Does indoor cycling (spinning) burn the same calories as outdoor cycling?</h4>
      <p>
        Indoor cycling can burn similar calories, especially with high-intensity spin classes. 
        However, outdoor cycling may vary due to terrain changes.
      </p>
      
      <h4 className="font-semibold mt-4">3. Can cycling help with weight loss?</h4>
      <p>
        Yes! Cycling is a great cardio exercise that burns calories and supports fat loss when combined 
        with a balanced diet.
      </p>
      
      <h4 className="font-semibold mt-4">4. How many calories does a 10-mile bike ride burn?</h4>
      <p>
        On average, a 10-mile (16 km) ride burns 400–600 kcal, depending on speed and weight.
      </p>
    </div>
  );

  return (
    <CalculatorLayout 
      title="Cycling Calorie Calculator" 
      icon={<Bike className="h-8 w-8 text-primary" />}
      content={cyclingContent}
    >
      <form onSubmit={handleSubmit} className="calculator-form">
        <div>
          <label className="block mb-2 text-sm font-medium">Weight</label>
          <div className="flex">
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
              required
              min="20"
              max="500"
            />
            <select
              value={isKg ? "kg" : "lbs"}
              onChange={(e) => setIsKg(e.target.value === "kg")}
              className="px-3 py-2 border border-l-0 rounded-r-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Cycling Type</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={!isStationary}
                onChange={() => setIsStationary(false)}
                className="mr-2"
              />
              Road Cycling
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={isStationary}
                onChange={() => setIsStationary(true)}
                className="mr-2"
              />
              Stationary Bike
            </label>
          </div>
        </div>

        {!isStationary && (
          <div>
            <label className="block mb-2 text-sm font-medium">Cycling Intensity</label>
            <select
              value={intensity}
              onChange={(e) => setIntensity(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="light">Leisure (~10 mph / 16 km/h)</option>
              <option value="moderate">Moderate (~12-14 mph / 19-22 km/h)</option>
              <option value="vigorous">Vigorous (~16+ mph / 25+ km/h)</option>
            </select>
          </div>
        )}

        <div>
          <label className="block mb-2 text-sm font-medium">Duration (minutes)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            required
            min="1"
            max="300"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-primary text-white font-medium py-2 rounded-md hover:bg-primary/80 transition-colors"
        >
          Calculate Calories
        </button>

        {calories !== null && (
          <div className="calculator-result animate-pulse-soft">
            <p className="font-medium">You burn approximately:</p>
            <p className="text-2xl font-bold text-primary">{calories} calories</p>
          </div>
        )}
      </form>
    </CalculatorLayout>
  );
};

export default CyclingCalculator;
