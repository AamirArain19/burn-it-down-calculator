
import React, { useState } from 'react';
import { Yoga } from 'lucide-react';
import { calculateCalories, MET } from '../../utils/calculatorUtils';
import CalculatorLayout from '../CalculatorLayout';

const YogaCalculator = () => {
  const [weight, setWeight] = useState<number>(70);
  const [isKg, setIsKg] = useState<boolean>(true);
  const [practiceType, setPracticeType] = useState<string>("power_yoga");
  const [duration, setDuration] = useState<number>(60);
  const [calories, setCalories] = useState<number | null>(null);

  const calculateYogaCalories = () => {
    // Get MET value based on yoga/pilates type
    let met;
    
    switch (practiceType) {
      case "hatha_yoga":
        met = MET.mindful.hatha_yoga;
        break;
      case "power_yoga":
        met = MET.mindful.power_yoga;
        break;
      case "hot_yoga":
        met = MET.mindful.hot_yoga;
        break;
      case "mat_pilates":
        met = MET.mindful.mat_pilates;
        break;
      case "reformer_pilates":
        met = MET.mindful.reformer_pilates;
        break;
      default:
        met = MET.mindful.power_yoga;
    }
    
    const result = calculateCalories(weight, met, duration, isKg);
    setCalories(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateYogaCalories();
  };
  
  const yogaContent = (
    <div className="blog-content">
      <h2>Yoga vs. Pilates Calorie Burn: Which Mindful Workout Burns More?</h2>
      <p>
        Many people turn to yoga and Pilates for strength, flexibility, and stress relief—but how do they 
        compare for calorie burn? Let's break down the numbers and benefits of each practice.
      </p>
      
      <h3>Calorie Burn Comparison (Per 60-Min Session for a 150-lb Person)</h3>
      <table>
        <thead>
          <tr>
            <th>Workout Type</th>
            <th>Calories Burned</th>
            <th>Intensity Level</th>
            <th>Primary Benefits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hatha Yoga</td>
            <td>180-240 kcal</td>
            <td>Low to Moderate</td>
            <td>Stress relief, flexibility</td>
          </tr>
          <tr>
            <td>Vinyasa/Power Yoga</td>
            <td>300-450 kcal</td>
            <td>Moderate to High</td>
            <td>Strength, cardio</td>
          </tr>
          <tr>
            <td>Hot Yoga</td>
            <td>400-600 kcal</td>
            <td>High</td>
            <td>Detox, endurance</td>
          </tr>
          <tr>
            <td>Mat Pilates</td>
            <td>200-350 kcal</td>
            <td>Moderate</td>
            <td>Core strength, posture</td>
          </tr>
          <tr>
            <td>Reformer Pilates</td>
            <td>250-400 kcal</td>
            <td>Moderate to High</td>
            <td>Full-body toning</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm italic mt-2">Note: Calorie burn varies based on weight, intensity, and individual metabolism.</p>
      
      <h3>Which Burns More Calories?</h3>
      <p className="font-semibold">🏆 Higher Calorie Burn: Power Yoga & Pilates HIIT</p>
      <p>
        Vinyasa yoga (flow-based) and Pilates HIIT (interval-style) elevate heart rate more than traditional forms.
      </p>
      <p>
        Hot yoga increases calorie burn due to heat-induced exertion.
      </p>
      
      <p className="font-semibold mt-4">💆‍♀️ Lower Intensity but Still Beneficial: Hatha Yoga & Classical Pilates</p>
      <p>While they burn fewer calories, they improve:</p>
      <ul>
        <li>✅ Core strength</li>
        <li>✅ Posture alignment</li>
        <li>✅ Mind-body connection</li>
      </ul>
      
      <h3>Factors That Affect Calorie Burn</h3>
      <h4 className="font-semibold mt-3">Type of Class</h4>
      <p>
        Dynamic styles (Ashtanga, Power Yoga, Reformer Pilates) burn more than gentle or restorative classes.
      </p>
      
      <h4 className="font-semibold mt-3">Heat & Environment</h4>
      <p>
        Hot yoga (Bikram) can increase calorie burn by 20-30% due to thermoregulation.
      </p>
      
      <h4 className="font-semibold mt-3">Body Weight & Muscle Engagement</h4>
      <p>
        Heavier individuals burn more calories.
      </p>
      <p>
        Proper muscle activation (e.g., engaging the core in Pilates) increases energy expenditure.
      </p>
      
      <h4 className="font-semibold mt-3">Fitness Level</h4>
      <p>
        Beginners burn fewer calories than advanced practitioners who perform more challenging variations.
      </p>
      
      <h3>Which Should You Choose?</h3>
      <h4 className="font-semibold mt-3">Pick Yoga If You Want…</h4>
      <ul>
        <li>✔ Stress reduction & mindfulness</li>
        <li>✔ Improved flexibility & balance</li>
        <li>✔ A mix of relaxation and movement</li>
      </ul>
      
      <h4 className="font-semibold mt-3">Pick Pilates If You Want…</h4>
      <ul>
        <li>✔ Stronger core & posture</li>
        <li>✔ Low-impact strength training</li>
        <li>✔ Injury rehabilitation</li>
      </ul>
      
      <h4 className="font-semibold mt-3">Best for Calorie Burn?</h4>
      <ul>
        <li>Power Yoga (for cardio + strength)</li>
        <li>Pilates HIIT (for toning + endurance)</li>
      </ul>
      
      <h3>How to Maximize Calorie Burn</h3>
      <h4 className="font-semibold mt-3">🔥 For Yoga:</h4>
      <ul>
        <li>Choose Vinyasa or Power Yoga over Hatha</li>
        <li>Add arm balances & advanced poses</li>
        <li>Try hot yoga for extra sweat</li>
      </ul>
      
      <h4 className="font-semibold mt-3">🔥 For Pilates:</h4>
      <ul>
        <li>Use a reformer machine for resistance</li>
        <li>Opt for Pilates HIIT or cardio Pilates classes</li>
        <li>Focus on controlled, powerful movements</li>
      </ul>
    </div>
  );

  return (
    <CalculatorLayout 
      title="Yoga & Pilates Calorie Calculator" 
      icon={<Yoga className="h-8 w-8 text-primary" />}
      content={yogaContent}
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
          <label className="block mb-2 text-sm font-medium">Practice Type</label>
          <select
            value={practiceType}
            onChange={(e) => setPracticeType(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="hatha_yoga">Hatha Yoga</option>
            <option value="power_yoga">Power/Vinyasa Yoga</option>
            <option value="hot_yoga">Hot Yoga</option>
            <option value="mat_pilates">Mat Pilates</option>
            <option value="reformer_pilates">Reformer Pilates</option>
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
            min="10"
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
            <p className="text-xs text-gray-500 mt-2">
              {practiceType === 'hot_yoga' ? 
                'Hot yoga increases calorie burn due to thermoregulation needs' : 
                'Remember that mindful practices provide benefits beyond calorie burn'}
            </p>
          </div>
        )}
      </form>
    </CalculatorLayout>
  );
};

export default YogaCalculator;
