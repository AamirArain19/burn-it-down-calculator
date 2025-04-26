
import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { calculateCalories, MET } from '../../utils/calculatorUtils';
import CalculatorLayout from '../CalculatorLayout';

const NEATCalculator = () => {
  const [weight, setWeight] = useState<number>(70);
  const [isKg, setIsKg] = useState<boolean>(true);
  const [activityType, setActivityType] = useState<string>("walking_slow");
  const [duration, setDuration] = useState<number>(60);
  const [calories, setCalories] = useState<number | null>(null);

  const calculateNEATCalories = () => {
    // Get MET value based on non-exercise activity
    let met;
    
    switch (activityType) {
      case "standing":
        met = MET.neat.standing;
        break;
      case "walking_slow":
        met = MET.neat.walking_slow;
        break;
      case "fidgeting":
        met = MET.neat.fidgeting;
        break;
      case "shopping":
        met = MET.neat.shopping;
        break;
      case "cooking":
        met = MET.neat.cooking;
        break;
      case "playing_kids":
        met = MET.neat.playing_kids;
        break;
      default:
        met = MET.neat.walking_slow;
    }
    
    const result = calculateCalories(weight, met, duration, isKg);
    setCalories(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateNEATCalories();
  };
  
  const neatContent = (
    <div className="blog-content">
      <h2>Non-Exercise Activity Calorie Burn: How Everyday Movements Add Up</h2>
      <p>
        Discover how much energy you burn through NEAT (Non-Exercise Activity Thermogenesis)—the 
        calories you expend from daily activities outside of formal workouts. From fidgeting to grocery 
        shopping, these small movements can significantly impact your metabolism and weight management.
      </p>
      
      <h3>Calories Burned in Common Non-Exercise Activities (Per Hour for 150-lb Person)</h3>
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Calories Burned</th>
            <th>Equivalent Exercise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standing</td>
            <td>100-130 kcal</td>
            <td>Very light yoga</td>
          </tr>
          <tr>
            <td>Walking Slowly</td>
            <td>150-200 kcal</td>
            <td>Leisurely cycling</td>
          </tr>
          <tr>
            <td>Fidgeting/Tapping</td>
            <td>80-120 kcal</td>
            <td>Gentle stretching</td>
          </tr>
          <tr>
            <td>Cooking</td>
            <td>120-180 kcal</td>
            <td>Slow dancing</td>
          </tr>
          <tr>
            <td>Grocery Shopping</td>
            <td>180-220 kcal</td>
            <td>Casual swimming</td>
          </tr>
          <tr>
            <td>Playing with Kids</td>
            <td>200-300 kcal</td>
            <td>Doubles tennis</td>
          </tr>
          <tr>
            <td>Office Work (standing desk)</td>
            <td>100-150 kcal</td>
            <td>Light housework</td>
          </tr>
          <tr>
            <td>Gardening (light)</td>
            <td>200-250 kcal</td>
            <td>Golf (walking)</td>
          </tr>
          <tr>
            <td>Walking the Dog</td>
            <td>150-250 kcal</td>
            <td>Brisk walking</td>
          </tr>
          <tr>
            <td>Dancing Casually</td>
            <td>200-350 kcal</td>
            <td>Low-impact aerobics</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm italic mt-2">Note: Calorie burn increases with body weight and movement intensity.</p>
      
      <h3>How NEAT Affects Your Metabolism</h3>
      <p>
        NEAT accounts for 15-50% of your total daily calorie expenditure (more than formal exercise for most people!). 
        Small movements add up:
      </p>
      <ul>
        <li>✅ Fidgeting: Burns 5-10% more calories than sitting still</li>
        <li>✅ Standing vs. Sitting: 50-100 extra kcal/hour</li>
        <li>✅ Walking Slowly: 2-3x more calories than sedentary time</li>
      </ul>
      
      <h3>Example Daily NEAT Burn (150-lb Person)</h3>
      <ul>
        <li>Morning routine (1 hour): 150 kcal</li>
        <li>Work (standing desk, 4 hours): 400 kcal</li>
        <li>Grocery shopping (1 hour): 200 kcal</li>
        <li>Playing with kids (1 hour): 250 kcal</li>
        <li>Evening chores (1 hour): 180 kcal</li>
      </ul>
      <p>Total NEAT Burn: ~1,180 kcal/day</p>
      <p className="italic">*(Equivalent to running 10+ miles!)*</p>
      
      <h3>How to Increase NEAT for Fat Loss</h3>
      <h4 className="font-semibold mt-3">🔥 Desk Workers:</h4>
      <ul>
        <li>Stand or pace during calls</li>
        <li>Take 5-min walking breaks hourly</li>
        <li>Use a stability ball chair</li>
      </ul>
      
      <h4 className="font-semibold mt-3">🔥 At Home:</h4>
      <ul>
        <li>Fold laundry while standing</li>
        <li>Cook from scratch (chopping, stirring)</li>
        <li>Walk while watching TV</li>
      </ul>
      
      <h4 className="font-semibold mt-3">🔥 Out & About:</h4>
      <ul>
        <li>Take stairs instead of elevators</li>
        <li>Park farther away</li>
        <li>Carry groceries instead of using a cart</li>
      </ul>
      
      <h3>NEAT vs. Exercise: Which Matters More?</h3>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>NEAT</th>
            <th>Exercise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daily Calories Burned</td>
            <td>300-800 kcal</td>
            <td>200-600 kcal</td>
          </tr>
          <tr>
            <td>Metabolic Impact</td>
            <td>All day</td>
            <td>1-2 hours post-workout</td>
          </tr>
          <tr>
            <td>Sustainability</td>
            <td>Easy long-term</td>
            <td>Requires motivation</td>
          </tr>
          <tr>
            <td>Joint Impact</td>
            <td>Low</td>
            <td>Moderate-high</td>
          </tr>
        </tbody>
      </table>
      <p>Best Strategy: Combine both for optimal fat loss!</p>
    </div>
  );

  return (
    <CalculatorLayout 
      title="Non-Exercise Activity Calorie Calculator" 
      icon={<Activity className="h-8 w-8 text-primary" />}
      content={neatContent}
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
          <label className="block mb-2 text-sm font-medium">Activity Type</label>
          <select
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="standing">Standing</option>
            <option value="walking_slow">Walking Slowly</option>
            <option value="fidgeting">Fidgeting/Tapping</option>
            <option value="shopping">Grocery Shopping</option>
            <option value="cooking">Cooking</option>
            <option value="playing_kids">Playing with Kids</option>
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
            max="480"
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
            <p className="text-sm mt-2">
              Small movements throughout the day add up to significant calorie burn!
            </p>
          </div>
        )}
      </form>
    </CalculatorLayout>
  );
};

export default NEATCalculator;
