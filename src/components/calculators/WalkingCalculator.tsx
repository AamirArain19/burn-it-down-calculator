
import React, { useState } from 'react';
import { PersonStanding } from 'lucide-react';
import { calculateCalories, MET } from '../../utils/calculatorUtils';
import CalculatorLayout from '../CalculatorLayout';

const WalkingCalculator = () => {
  const [weight, setWeight] = useState<number>(70);
  const [isKg, setIsKg] = useState<boolean>(true);
  const [speed, setSpeed] = useState<string>('moderate');
  const [incline, setIncline] = useState<number>(0);
  const [duration, setDuration] = useState<number>(30);
  const [calories, setCalories] = useState<number | null>(null);

  const calculateWalkingCalories = () => {
    // Get base MET value from walking speed
    let baseMet = MET.walking.moderate;
    switch (speed) {
      case 'slow':
        baseMet = MET.walking.slow;
        break;
      case 'moderate':
        baseMet = MET.walking.moderate;
        break;
      case 'brisk':
        baseMet = MET.walking.brisk;
        break;
      case 'fast':
        baseMet = MET.walking.fast;
        break;
    }
    
    // Adjust for incline (approximate increase)
    const inclineAdjustment = 1 + (incline * 0.06); // ~6% increase per 1% incline
    const adjustedMet = baseMet * inclineAdjustment;
    
    const result = calculateCalories(weight, adjustedMet, duration, isKg);
    setCalories(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateWalkingCalories();
  };

  const walkingContent = (
    <div className="blog-content">
      <h2>Walking Calorie Calculator: How Many Calories Do You Burn Walking?</h2>
      <p>
        Walking is one of the most accessible and effective forms of exercise—but how many calories does it actually 
        burn? The answer depends on your walking speed, incline, and body weight.
      </p>
      
      <p>
        Our walking calorie calculator helps you estimate calories burned based on these key factors. Whether 
        you're strolling, power walking, or hiking uphill, this guide breaks down the science behind calorie 
        expenditure while walking.
      </p>
      
      <h3>How Does a Walking Calorie Calculator Work?</h3>
      <p>
        Calories burned while walking are calculated using MET (Metabolic Equivalent of Task) values, which 
        measure exercise intensity. The formula is:
      </p>
      <p className="bg-gray-100 p-3 rounded">
        Calories Burned = MET × Weight (kg) × Time (hours)
      </p>
      
      <h3>Key Factors That Affect Calorie Burn</h3>
      <h4 className="font-semibold mt-3">Walking Speed</h4>
      <p>Faster walking burns more calories.</p>
      <ul>
        <li>Slow walk (2.5 mph / 4 kmph): ~2.8 METs</li>
        <li>Moderate walk (3.0 mph / 4.8 kmph): ~3.3 METs</li>
        <li>Brisk walk (3.5 mph / 5.6 kmph): ~3.8 METs</li>
        <li>Power walk (4.0 mph / 6.4 kmph): ~4.3 METs</li>
      </ul>
      
      <h4 className="font-semibold mt-3">Incline (Uphill Walking)</h4>
      <p>Walking uphill significantly increases calorie burn.</p>
      <ul>
        <li>5% incline: Adds ~30% more calories burned</li>
        <li>10% incline: Nearly doubles calorie burn vs. flat ground</li>
      </ul>
      
      <h4 className="font-semibold mt-3">Body Weight</h4>
      <p>Heavier individuals burn more calories at the same speed.</p>
      
      <h3>Walking Calorie Burn Estimates (By Weight & Speed)</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Weight</th>
              <th>Slow (2.5 mph)</th>
              <th>Moderate (3.0 mph)</th>
              <th>Brisk (3.5 mph)</th>
              <th>Power Walk (4.0 mph)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>60 kg (132 lbs)</td>
              <td>150 kcal/hour</td>
              <td>180 kcal/hour</td>
              <td>210 kcal/hour</td>
              <td>240 kcal/hour</td>
            </tr>
            <tr>
              <td>70 kg (154 lbs)</td>
              <td>175 kcal/hour</td>
              <td>210 kcal/hour</td>
              <td>245 kcal/hour</td>
              <td>280 kcal/hour</td>
            </tr>
            <tr>
              <td>80 kg (176 lbs)</td>
              <td>200 kcal/hour</td>
              <td>240 kcal/hour</td>
              <td>280 kcal/hour</td>
              <td>320 kcal/hour</td>
            </tr>
            <tr>
              <td>90 kg (198 lbs)</td>
              <td>225 kcal/hour</td>
              <td>270 kcal/hour</td>
              <td>315 kcal/hour</td>
              <td>360 kcal/hour</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm italic mt-2">*Note: Values are approximate for flat terrain. Add 30-100% more calories for uphill walking.*</p>

      <h3>5 Ways to Burn More Calories While Walking</h3>
      <ol className="list-decimal pl-5 space-y-2">
        <li><strong>Increase Speed</strong> – Power walking burns 30-50% more calories than strolling.</li>
        <li><strong>Walk Uphill</strong> – A 10% incline doubles calorie burn vs. flat ground.</li>
        <li><strong>Use Weights</strong> – Carrying light dumbbells or a backpack adds resistance.</li>
        <li><strong>Try Intervals</strong> – Alternate between fast and moderate walking.</li>
        <li><strong>Walk Longer</strong> – Extending your walk by 15-30 minutes increases total burn.</li>
      </ol>
    </div>
  );

  return (
    <CalculatorLayout 
      title="Walking Calorie Calculator" 
      icon={<PersonStanding className="h-8 w-8 text-primary" />}
      content={walkingContent}
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
          <label className="block mb-2 text-sm font-medium">Walking Speed</label>
          <select
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="slow">Slow (2.5 mph / 4 km/h)</option>
            <option value="moderate">Moderate (3.0 mph / 4.8 km/h)</option>
            <option value="brisk">Brisk (3.5 mph / 5.6 km/h)</option>
            <option value="fast">Fast (4.0+ mph / 6.4+ km/h)</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Incline (%)</label>
          <input
            type="number"
            value={incline}
            onChange={(e) => setIncline(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            min="0"
            max="30"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Duration (minutes)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            required
            min="1"
            max="1440"
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

export default WalkingCalculator;
