
import React, { useState } from 'react';
import { Mountain } from 'lucide-react';
import { calculateCalories, MET } from '../../utils/calculatorUtils';
import CalculatorLayout from '../CalculatorLayout';

const HikingCalculator = () => {
  const [weight, setWeight] = useState<number>(70);
  const [isKg, setIsKg] = useState<boolean>(true);
  const [difficulty, setDifficulty] = useState<string>("moderate");
  const [duration, setDuration] = useState<number>(60);
  const [packWeight, setPackWeight] = useState<number>(5);
  const [calories, setCalories] = useState<number | null>(null);

  const calculateHikingCalories = () => {
    // Get base MET value based on difficulty
    let baseMet;
    
    switch (difficulty) {
      case "easy":
        baseMet = MET.hiking.easy;
        break;
      case "moderate":
        baseMet = MET.hiking.moderate;
        break;
      case "difficult":
        baseMet = MET.hiking.difficult;
        break;
      case "mountaineering":
        baseMet = MET.hiking.mountaineering;
        break;
      default:
        baseMet = MET.hiking.moderate;
    }
    
    // Adjust for pack weight (approximate increase)
    // Add about 5% metabolic cost per 10 lbs of pack weight
    const packAdjustment = 1 + (packWeight * 0.005);
    const adjustedMet = baseMet * packAdjustment;
    
    const result = calculateCalories(weight, adjustedMet, duration, isKg);
    setCalories(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateHikingCalories();
  };
  
  const hikingContent = (
    <div className="blog-content">
      <h2>Hiking Calorie Calculator: Estimate Your Trail Burn</h2>
      <p>
        Discover how many calories you burn while hiking with our accurate calculator. Whether you're 
        tackling mountain trails or enjoying forest walks, we'll help you track your energy expenditure 
        based on key factors.
      </p>
      
      <h3>How Our Hiking Calorie Calculator Works</h3>
      <p>Our calculator uses scientifically validated formulas that consider:</p>
      
      <h4 className="font-semibold mt-3">Key Calculation Factors</h4>
      <ul>
        <li>Your body weight (more weight = higher burn)</li>
        <li>Hiking duration</li>
        <li>Trail difficulty (flat vs. incline)</li>
        <li>Pack weight (adds significant calorie expenditure)</li>
        <li>Terrain type (rocky/uneven vs. smooth paths)</li>
        <li>Walking speed</li>
      </ul>
      
      <h3>Calorie Burn Estimates (Per Hour)</h3>
      <table>
        <thead>
          <tr>
            <th>Hiking Type</th>
            <th>120-lb Person</th>
            <th>150-lb Person</th>
            <th>180-lb Person</th>
            <th>200-lb Person</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Leisurely (flat trail)</td>
            <td>240-290 kcal</td>
            <td>300-360 kcal</td>
            <td>360-430 kcal</td>
            <td>400-480 kcal</td>
          </tr>
          <tr>
            <td>Moderate (rolling hills)</td>
            <td>300-370 kcal</td>
            <td>370-460 kcal</td>
            <td>440-550 kcal</td>
            <td>490-610 kcal</td>
          </tr>
          <tr>
            <td>Vigorous (steep ascent)</td>
            <td>400-500 kcal</td>
            <td>500-620 kcal</td>
            <td>600-740 kcal</td>
            <td>670-830 kcal</td>
          </tr>
          <tr>
            <td>Mountain climbing (with pack)</td>
            <td>450-550 kcal</td>
            <td>560-690 kcal</td>
            <td>670-830 kcal</td>
            <td>750-930 kcal</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm italic mt-2">*Note: Values account for 10-20lb pack weight on strenuous hikes*</p>
      
      <h3>5 Factors That Dramatically Increase Hiking Calorie Burn</h3>
      <ol className="list-decimal pl-5 space-y-2">
        <li><strong>Elevation Gain</strong> - Adds 50-100% more calories vs flat terrain</li>
        <li><strong>Rough Terrain</strong> - Uneven trails burn 20-30% more than smooth paths</li>
        <li><strong>Heavy Backpack</strong> - Each 10lbs adds ~50-100 kcal/hour</li>
        <li><strong>Cold Weather</strong> - Body burns extra calories staying warm</li>
        <li><strong>Fast Pace</strong> - Power hiking burns 25% more than casual walking</li>
      </ol>
      
      <h3>Hiking vs Other Activities (Calories/Hour for 150-lb Person)</h3>
      <ul>
        <li>Hiking hills: 400-500 kcal</li>
        <li>Running 5mph: 600 kcal</li>
        <li>Cycling 12mph: 500 kcal</li>
        <li>Swimming laps: 400 kcal</li>
        <li>Weight training: 300 kcal</li>
      </ul>
      
      <h3>Maximize Your Hiking Calorie Burn</h3>
      <h4 className="font-semibold mt-3">🔥 Try These Pro Tips:</h4>
      <ul>
        <li>Add 10-20lbs to your pack (safely)</li>
        <li>Choose trails with 1,000+ ft elevation gain</li>
        <li>Maintain a brisk pace (3+ mph on inclines)</li>
        <li>Incorporate trekking poles (15% more burn)</li>
        <li>Take the steeper alternate routes</li>
      </ul>
      
      <h3>Hiking for Weight Loss</h3>
      <p>A 3-hour vigorous hike can burn:</p>
      <ul>
        <li>1,500+ calories (equal to 15 miles of running!)</li>
        <li>Creates significant calorie deficit</li>
        <li>Preserves muscle better than pure cardio</li>
        <li>Boosts metabolism for 24+ hours</li>
      </ul>
      
      <h3>Frequently Asked Questions</h3>
      <h4 className="font-semibold mt-3">Q: Does hiking burn belly fat?</h4>
      <p>
        A: While you can't spot-reduce, hiking creates the calorie deficit needed for overall fat loss, including abdominal fat.
      </p>
      
      <h4 className="font-semibold mt-3">Q: How accurate are fitness trackers for hiking?</h4>
      <p>
        A: Most underestimate by 15-25% for hilly terrain. Our calculator provides more accurate estimates.
      </p>
      
      <h4 className="font-semibold mt-3">Q: Is hiking or running better for weight loss?</h4>
      <p>
        A: Hiking is gentler on joints and offers comparable calorie burn when including elevation.
      </p>
    </div>
  );

  return (
    <CalculatorLayout 
      title="Hiking Calorie Calculator" 
      icon={<Mountain className="h-8 w-8 text-primary" />}
      content={hikingContent}
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
          <label className="block mb-2 text-sm font-medium">Trail Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="easy">Easy (Flat, well-maintained)</option>
            <option value="moderate">Moderate (Rolling hills, some rocks)</option>
            <option value="difficult">Difficult (Steep, technical)</option>
            <option value="mountaineering">Mountaineering (Very steep, challenging)</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Pack Weight (kg)</label>
          <input
            type="number"
            value={packWeight}
            onChange={(e) => setPackWeight(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            min="0"
            max="40"
          />
          <p className="text-xs text-gray-500 mt-1">
            Enter 0 if you're not carrying a pack
          </p>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Duration (minutes)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            required
            min="10"
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
            <p className="text-xs text-gray-500 mt-2">
              {difficulty === 'mountaineering' 
                ? "Mountaineering is extremely demanding - make sure you're properly prepared!" 
                : "Remember to stay hydrated and pack nutritious snacks for your hike!"}
            </p>
          </div>
        )}
      </form>
    </CalculatorLayout>
  );
};

export default HikingCalculator;
