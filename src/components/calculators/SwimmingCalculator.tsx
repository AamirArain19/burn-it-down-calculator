
import React, { useState } from 'react';
import { Swimming } from 'lucide-react';
import { calculateCalories, MET } from '../../utils/calculatorUtils';
import CalculatorLayout from '../CalculatorLayout';

const SwimmingCalculator = () => {
  const [weight, setWeight] = useState<number>(70);
  const [isKg, setIsKg] = useState<boolean>(true);
  const [stroke, setStroke] = useState<string>("freestyle_moderate");
  const [duration, setDuration] = useState<number>(30);
  const [calories, setCalories] = useState<number | null>(null);

  const calculateSwimmingCalories = () => {
    // Get MET value for swimming stroke
    let met = MET.swimming.freestyle_moderate; // default
    
    switch (stroke) {
      case "leisure":
        met = MET.swimming.leisure;
        break;
      case "freestyle_moderate":
        met = MET.swimming.freestyle_moderate;
        break;
      case "freestyle_vigorous":
        met = MET.swimming.freestyle_vigorous;
        break;
      case "breaststroke":
        met = MET.swimming.breaststroke;
        break;
      case "butterfly":
        met = MET.swimming.butterfly;
        break;
      case "backstroke":
        met = MET.swimming.backstroke;
        break;
      default:
        met = MET.swimming.freestyle_moderate;
    }
    
    const result = calculateCalories(weight, met, duration, isKg);
    setCalories(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateSwimmingCalories();
  };
  
  const swimmingContent = (
    <div className="blog-content">
      <h2>Swimming Calorie Calculator: Track Your Burned Calories in the Pool</h2>
      <p>
        Want to know how many calories you burn while swimming? Our Swimming Calorie Calculator 
        helps you estimate energy expenditure based on stroke type, intensity, duration, and body weight. 
        Whether you're doing laps for fitness or training for a triathlon, this tool helps optimize your workouts!
      </p>
      
      <h3>How Does a Swimming Calorie Calculator Work?</h3>
      <p>Calories burned while swimming depend on:</p>
      <ul>
        <li><strong>Body Weight</strong> – Heavier individuals burn more calories.</li>
        <li><strong>Swimming Stroke</strong> – Butterfly burns more than breaststroke.</li>
        <li><strong>Intensity & Speed</strong> – Vigorous swimming increases calorie burn.</li>
        <li><strong>Duration</strong> – Longer sessions expend more energy.</li>
      </ul>
      
      <p>
        Our calculator uses the MET (Metabolic Equivalent of Task) formula:
      </p>
      <p className="bg-gray-100 p-3 rounded">
        Calories Burned = MET × Weight (kg) × Time (hours)
      </p>
      
      <h3>MET Values for Common Swimming Strokes:</h3>
      <ul>
        <li>Freestyle (Moderate): 8 METs</li>
        <li>Freestyle (Vigorous): 10 METs</li>
        <li>Breaststroke: 6-8 METs</li>
        <li>Butterfly: 11 METs</li>
        <li>Backstroke: 5-7 METs</li>
      </ul>
      
      <h3>Benefits of Tracking Swimming Calories</h3>
      <ul>
        <li>✅ Weight Loss & Management – Swimming burns significant calories with low joint impact.</li>
        <li>✅ Improved Cardiovascular Health – Great for heart and lung endurance.</li>
        <li>✅ Full-Body Workout – Engages multiple muscle groups.</li>
        <li>✅ Flexibility & Recovery – Ideal for active recovery and injury prevention.</li>
      </ul>
      
      <h3>Tips to Maximize Calorie Burn While Swimming</h3>
      <ul>
        <li><strong>Mix Up Strokes</strong> – Alternate between freestyle, breaststroke, and butterfly.</li>
        <li><strong>Use Interval Training</strong> – Sprint for 1-2 laps, then recover.</li>
        <li><strong>Add Resistance</strong> – Wear hand paddles or use a drag suit.</li>
        <li><strong>Increase Distance Gradually</strong> – Build endurance for longer calorie burn.</li>
      </ul>
      
      <h3>Frequently Asked Questions (FAQs)</h3>
      <h4 className="font-semibold mt-4">1. How accurate is a swimming calorie calculator?</h4>
      <p>
        It provides a good estimate, but factors like technique, water temperature, and efficiency can affect actual burn.
      </p>
      
      <h4 className="font-semibold mt-4">2. Does swimming burn more calories than running?</h4>
      <p>
        It depends on intensity—vigorous swimming can match or exceed moderate running in calorie burn.
      </p>
      
      <h4 className="font-semibold mt-4">3. Can swimming help with weight loss?</h4>
      <p>
        Yes! Swimming is an excellent full-body workout that burns calories while being gentle on joints.
      </p>
      
      <h4 className="font-semibold mt-4">4. How many calories does 30 minutes of swimming burn?</h4>
      <p>
        On average:
      </p>
      <ul>
        <li>Leisure swimming: 200-300 kcal</li>
        <li>Moderate freestyle: 250-400 kcal</li>
        <li>Vigorous (butterfly/laps): 400-500 kcal</li>
      </ul>
    </div>
  );

  return (
    <CalculatorLayout 
      title="Swimming Calorie Calculator" 
      icon={<Swimming className="h-8 w-8 text-primary" />}
      content={swimmingContent}
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
          <label className="block mb-2 text-sm font-medium">Swimming Stroke & Intensity</label>
          <select
            value={stroke}
            onChange={(e) => setStroke(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="leisure">Leisure Swimming</option>
            <option value="freestyle_moderate">Freestyle (Moderate)</option>
            <option value="freestyle_vigorous">Freestyle (Vigorous)</option>
            <option value="breaststroke">Breaststroke</option>
            <option value="butterfly">Butterfly</option>
            <option value="backstroke">Backstroke</option>
          </select>
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

export default SwimmingCalculator;
