
import React, { useState } from 'react';
import { Running } from 'lucide-react';
import { calculateCalories, MET } from '../../utils/calculatorUtils';
import CalculatorLayout from '../CalculatorLayout';

const RunningCalculator = () => {
  const [weight, setWeight] = useState<number>(70);
  const [isKg, setIsKg] = useState<boolean>(true);
  const [intensity, setIntensity] = useState<string>('moderate');
  const [isTreadmill, setIsTreadmill] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(30);
  const [calories, setCalories] = useState<number | null>(null);

  const calculateRunningCalories = () => {
    // Get base MET value from running intensity
    let baseMet;
    if (isTreadmill) {
      baseMet = MET.running.treadmill;
    } else {
      switch (intensity) {
        case 'light':
          baseMet = MET.running.light;
          break;
        case 'moderate':
          baseMet = MET.running.moderate;
          break;
        case 'vigorous':
          baseMet = MET.running.vigorous;
          break;
        default:
          baseMet = MET.running.moderate;
      }
    }
    
    const result = calculateCalories(weight, baseMet, duration, isKg);
    setCalories(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateRunningCalories();
  };
  
  const runningContent = (
    <div className="blog-content">
      <h2>Running Calorie Calculator: Track Your Burned Calories Effortlessly</h2>
      <p>
        Are you looking for an accurate way to measure how many calories you burn while running? 
        Our Running Calorie Calculator helps you estimate your calorie expenditure based on distance, 
        pace, weight, and duration. Whether you're a beginner or a seasoned runner, this tool can optimize your fitness goals!
      </p>
      
      <h3>How Does a Running Calorie Calculator Work?</h3>
      <p>Calories burned during running depend on several factors:</p>
      <ul>
        <li><strong>Body Weight</strong> – Heavier individuals burn more calories.</li>
        <li><strong>Running Speed</strong> – Faster paces increase calorie expenditure.</li>
        <li><strong>Distance Covered</strong> – Longer runs burn more energy.</li>
        <li><strong>Terrain & Incline</strong> – Uphill running increases intensity.</li>
      </ul>
      
      <p>
        Our calculator uses the MET (Metabolic Equivalent of Task) formula to provide precise estimates:
      </p>
      <p className="bg-gray-100 p-3 rounded">
        Calories Burned = MET × Weight (kg) × Time (hours)
      </p>
      
      <h3>Benefits of Tracking Running Calories</h3>
      <ul>
        <li>✅ Weight Management – Helps maintain a calorie deficit for fat loss.</li>
        <li>✅ Training Optimization – Adjust intensity based on energy expenditure.</li>
        <li>✅ Motivation Boost – Seeing progress encourages consistency.</li>
        <li>✅ Nutrition Planning – Balance calorie intake with exercise output.</li>
      </ul>
      
      <h3>Tips to Maximize Calorie Burn While Running</h3>
      <ul>
        <li><strong>Incorporate Intervals</strong> – Alternate between sprinting and jogging.</li>
        <li><strong>Run Uphill</strong> – Increases resistance and burns more calories.</li>
        <li><strong>Increase Distance Gradually</strong> – Build endurance and energy expenditure.</li>
        <li><strong>Stay Consistent</strong> – Regular runs improve metabolism over time.</li>
      </ul>
      
      <h3>Frequently Asked Questions (FAQs)</h3>
      <h4 className="font-semibold mt-4">1. How accurate is a running calorie calculator?</h4>
      <p>
        While calculators provide estimates, individual metabolism and running efficiency can vary. 
        Wearable fitness trackers may offer more personalized data.
      </p>
      
      <h4 className="font-semibold mt-4">2. Does running on a treadmill burn the same calories as outdoor running?</h4>
      <p>
        Outdoor running typically burns slightly more calories due to wind resistance and terrain changes.
      </p>
      
      <h4 className="font-semibold mt-4">3. Can I lose weight just by running?</h4>
      <p>
        Yes, running helps create a calorie deficit, but combining it with a balanced diet yields the best results.
      </p>
      
      <h4 className="font-semibold mt-4">4. How many calories does a 5K run burn?</h4>
      <p>
        On average, a 5K (3.1 miles) run burns 300–500 kcal, depending on weight and speed.
      </p>
    </div>
  );

  return (
    <CalculatorLayout 
      title="Running Calorie Calculator" 
      icon={<Running className="h-8 w-8 text-primary" />}
      content={runningContent}
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
          <label className="block mb-2 text-sm font-medium">Running Surface</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={!isTreadmill}
                onChange={() => setIsTreadmill(false)}
                className="mr-2"
              />
              Outdoor
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={isTreadmill}
                onChange={() => setIsTreadmill(true)}
                className="mr-2"
              />
              Treadmill
            </label>
          </div>
        </div>

        {!isTreadmill && (
          <div>
            <label className="block mb-2 text-sm font-medium">Running Pace</label>
            <select
              value={intensity}
              onChange={(e) => setIntensity(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="light">Light Jog (~5 mph / 8 km/h)</option>
              <option value="moderate">Moderate Run (~6-7 mph / 10-11 km/h)</option>
              <option value="vigorous">Fast Run (~8+ mph / 13+ km/h)</option>
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

export default RunningCalculator;
