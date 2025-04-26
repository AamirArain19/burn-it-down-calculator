
import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { calculateCalories, MET } from '../../utils/calculatorUtils';
import CalculatorLayout from '../CalculatorLayout';

const HouseholdCalculator = () => {
  const [weight, setWeight] = useState<number>(70);
  const [isKg, setIsKg] = useState<boolean>(true);
  const [choreType, setChoreType] = useState<string>("mopping");
  const [duration, setDuration] = useState<number>(30);
  const [calories, setCalories] = useState<number | null>(null);
  const [equivalent, setEquivalent] = useState<string>('');

  const calculateHouseholdCalories = () => {
    // Get MET value based on chore type
    let met;
    
    switch (choreType) {
      case "mopping":
        met = MET.household.mopping;
        setEquivalent("brisk walking");
        break;
      case "vacuuming":
        met = MET.household.vacuuming;
        setEquivalent("light yoga");
        break;
      case "scrubbing":
        met = MET.household.scrubbing;
        setEquivalent("water aerobics");
        break;
      case "gardening":
        met = MET.household.gardening;
        setEquivalent("golf (carrying clubs)");
        break;
      case "laundry":
        met = MET.household.laundry;
        setEquivalent("gentle stretching");
        break;
      default:
        met = MET.household.mopping;
        setEquivalent("brisk walking");
    }
    
    const result = calculateCalories(weight, met, duration, isKg);
    setCalories(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateHouseholdCalories();
  };
  
  const householdContent = (
    <div className="blog-content">
      <h2>Household Chores Calorie Burn: Turn Cleaning into a Workout!</h2>
      <p>
        Did you know you can burn serious calories while doing housework? Many everyday chores count as 
        NEAT (Non-Exercise Activity Thermogenesis) - a key factor in weight management. Here's how your 
        cleaning routine stacks up for calorie burn.
      </p>
      
      <h3>Calories Burned Per 30 Minutes (For 150-lb Person)</h3>
      <table>
        <thead>
          <tr>
            <th>Chore</th>
            <th>Calories Burned</th>
            <th>Equivalent Exercise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mopping Floors</td>
            <td>150-170 kcal</td>
            <td>Brisk walking</td>
          </tr>
          <tr>
            <td>Vacuuming</td>
            <td>90-120 kcal</td>
            <td>Light yoga</td>
          </tr>
          <tr>
            <td>Scrubbing Bathroom</td>
            <td>180-200 kcal</td>
            <td>Water aerobics</td>
          </tr>
          <tr>
            <td>Gardening</td>
            <td>200-250 kcal</td>
            <td>Golf (carrying clubs)</td>
          </tr>
          <tr>
            <td>Washing Windows</td>
            <td>120-150 kcal</td>
            <td>Bowling</td>
          </tr>
          <tr>
            <td>Laundry (folding)</td>
            <td>70-90 kcal</td>
            <td>Gentle stretching</td>
          </tr>
          <tr>
            <td>Car Washing</td>
            <td>150-180 kcal</td>
            <td>Casual cycling</td>
          </tr>
          <tr>
            <td>Moving Furniture</td>
            <td>200-250 kcal</td>
            <td>Doubles tennis</td>
          </tr>
          <tr>
            <td>Raking Leaves</td>
            <td>150-200 kcal</td>
            <td>Canoeing</td>
          </tr>
          <tr>
            <td>Cooking (active)</td>
            <td>80-120 kcal</td>
            <td>Slow dancing</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm italic mt-2">Note: Calorie burn increases with body weight and intensity of movement.</p>
      
      <h3>Top 5 Highest-Calorie-Burning Chores</h3>
      <ol className="list-decimal pl-5 space-y-2">
        <li><strong>Shoveling Snow</strong> - 300+ kcal/30min (like cross-country skiing)</li>
        <li><strong>Deep Cleaning</strong> - 200-250 kcal/30min (similar to moderate swimming)</li>
        <li><strong>Yard Work</strong> - 180-220 kcal/30min (comparable to hiking)</li>
        <li><strong>Moving Boxes</strong> - 200+ kcal/30min (like weight training)</li>
        <li><strong>Scrubbing Floors</strong> - 180-200 kcal/30min (equivalent to water aerobics)</li>
      </ol>
      
      <h3>How to Maximize Calorie Burn While Cleaning</h3>
      <ul>
        <li>Add squats when picking up items</li>
        <li>Engage your core while vacuuming/mopping</li>
        <li>Take the stairs multiple times when putting things away</li>
        <li>Use arm motions vigorously when dusting</li>
        <li>Set a timer for 45-minute active cleaning bursts</li>
      </ul>
      
      <h3>Chores vs. Traditional Exercise</h3>
      <p>30 minutes of:</p>
      <ul>
        <li>Intense cleaning ≈ 15 minutes of jogging</li>
        <li>Yard work ≈ 20 minutes of cycling</li>
        <li>Organizing a closet ≈ 10 minutes of weight training</li>
      </ul>
      
      <h3>Weekly Cleaning Workout Plan</h3>
      <ul>
        <li>Monday: Deep clean bathrooms (45min = 270kcal)</li>
        <li>Tuesday: Vacuum entire house (30min = 120kcal)</li>
        <li>Wednesday: Yard work (60min = 400kcal)</li>
        <li>Thursday: Laundry + organizing (60min = 200kcal)</li>
        <li>Friday: Mopping + dusting (45min = 225kcal)</li>
        <li>Saturday: Car wash + garage clean (60min = 350kcal)</li>
        <li>Sunday: Meal prep + kitchen clean (60min = 240kcal)</li>
      </ul>
      <p>Total Weekly Burn: ~1,800 calories (equivalent to running 18 miles!)</p>
    </div>
  );

  return (
    <CalculatorLayout 
      title="Household Chores Calorie Calculator" 
      icon={<Home className="h-8 w-8 text-primary" />}
      content={householdContent}
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
          <label className="block mb-2 text-sm font-medium">Chore Type</label>
          <select
            value={choreType}
            onChange={(e) => setChoreType(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="mopping">Mopping Floors</option>
            <option value="vacuuming">Vacuuming</option>
            <option value="scrubbing">Scrubbing Bathroom</option>
            <option value="gardening">Gardening</option>
            <option value="laundry">Folding Laundry</option>
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
            min="5"
            max="180"
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
            {equivalent && (
              <p className="text-sm mt-2">
                Equivalent to {duration} minutes of {equivalent}!
              </p>
            )}
          </div>
        )}
      </form>
    </CalculatorLayout>
  );
};

export default HouseholdCalculator;
