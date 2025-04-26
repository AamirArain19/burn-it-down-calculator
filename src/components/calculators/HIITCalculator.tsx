
import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { calculateCalories, MET } from '../../utils/calculatorUtils';
import CalculatorLayout from '../CalculatorLayout';

const HIITCalculator = () => {
  const [weight, setWeight] = useState<number>(70);
  const [isKg, setIsKg] = useState<boolean>(true);
  const [exerciseType, setExerciseType] = useState<string>("hiit");
  const [duration, setDuration] = useState<number>(30);
  const [calories, setCalories] = useState<number | null>(null);
  const [afterburnCalories, setAfterburnCalories] = useState<number | null>(null);

  const calculateCaloriesBurned = () => {
    // Select MET based on exercise type
    const met = exerciseType === 'hiit' ? MET.cardio.hiit : MET.cardio.steady_state;
    
    // Calculate calories burned during exercise
    const result = calculateCalories(weight, met, duration, isKg);
    setCalories(result);
    
    // Calculate the afterburn effect (EPOC)
    // HIIT has a greater afterburn effect than steady-state
    const afterburnPercentage = exerciseType === 'hiit' ? 0.15 : 0.05; // 15% vs 5%
    const afterburn = Math.round(result * afterburnPercentage * 10);
    setAfterburnCalories(afterburn);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCaloriesBurned();
  };
  
  const hiitContent = (
    <div className="blog-content">
      <h2>HIIT vs. Steady-State Cardio: Which Burns More Calories?</h2>
      <p>
        Understanding the calorie-burning differences between High-Intensity Interval Training (HIIT) 
        and steady-state cardio can help you optimize your workouts for fat loss, endurance, and overall 
        fitness. Let's break down the science and practical applications.
      </p>
      
      <h3>Calorie Burn Comparison</h3>
      <h4 className="font-semibold mt-3">1. During the Workout</h4>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>HIIT (20-30 min)</th>
            <th>Steady-State (30-60 min)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Calories Burned</td>
            <td>250-400 kcal*</td>
            <td>300-500 kcal*</td>
          </tr>
          <tr>
            <td>Intensity</td>
            <td>85-100% max HR</td>
            <td>60-75% max HR</td>
          </tr>
          <tr>
            <td>Fat Burned</td>
            <td>30-40% of calories</td>
            <td>50-60% of calories</td>
          </tr>
          <tr>
            <td>Afterburn (EPOC)</td>
            <td>100-200 kcal over 24h</td>
            <td>Minimal (10-50 kcal)</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm italic mt-2">*Based on 70kg (154 lbs) individual</p>
      
      <h4 className="font-semibold mt-4">2. Over 24 Hours (Including EPOC)</h4>
      <p>
        HIIT: Burns 15-25% more total calories than steady-state due to the "afterburn effect" (EPOC)
      </p>
      <p>
        Steady-State: Most calorie burn occurs during the workout
      </p>
      
      <h4 className="font-semibold mt-4">3. Long-Term Metabolic Impact</h4>
      <p>
        HIIT: Preserves muscle mass better, leading to higher resting metabolism
      </p>
      <p>
        Steady-State: Can lead to muscle loss if overdone (especially in a calorie deficit)
      </p>
      
      <h3>Which Is Better for Fat Loss?</h3>
      <h4 className="font-semibold mt-3">HIIT Wins If You...</h4>
      <ul>
        <li>✔ Want time-efficient workouts (20-30 min)</li>
        <li>✔ Prefer varied, explosive movements</li>
        <li>✔ Want to preserve muscle while cutting</li>
        <li>✔ Enjoy challenging, fast-paced sessions</li>
      </ul>
      
      <h4 className="font-semibold mt-3">Steady-State Wins If You...</h4>
      <ul>
        <li>✔ Are a beginner or recovering from injury</li>
        <li>✔ Need low-impact exercise (walking, cycling)</li>
        <li>✔ Enjoy meditative, endurance-based workouts</li>
        <li>✔ Are training for marathons or long-distance events</li>
      </ul>
      
      <h3>How to Combine Both for Optimal Results</h3>
      <h4 className="font-semibold mt-3">The Hybrid Approach (Best for Fat Loss)</h4>
      <ul>
        <li>2-3 HIIT sessions/week (e.g., sprints, kettlebell circuits)</li>
        <li>2-3 steady-state sessions/week (e.g., brisk walking, cycling)</li>
        <li>1-2 strength training days (to maintain muscle)</li>
      </ul>
      
      <h4 className="font-semibold mt-3">Sample Weekly Plan</h4>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Workout</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>HIIT (20 min)</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>Steady-State (45 min cycling)</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>Strength Training</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>HIIT (25 min)</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>Steady-State (30 min incline walk)</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>Active Recovery (yoga/swim)</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Rest</td>
          </tr>
        </tbody>
      </table>
      
      <h3>Myths Debunked</h3>
      <p>❌ "Steady-state is useless for fat loss"</p>
      <p>→ Truth: It's excellent for beginners and active recovery.</p>
      
      <p>❌ "HIIT burns belly fat specifically"</p>
      <p>→ Truth: Fat loss is systemic—you can't spot-reduce.</p>
      
      <p>❌ "More HIIT = better results"</p>
      <p>→ Truth: Overtraining leads to burnout and injuries.</p>
      
      <h3>Final Verdict</h3>
      <p>For maximum calorie burn in less time → HIIT</p>
      <p>For endurance, recovery, and sustainability → Steady-State</p>
      <p>Best overall results → Combine both + strength training</p>
    </div>
  );

  return (
    <CalculatorLayout 
      title="HIIT vs. Steady-State Calorie Calculator" 
      icon={<Activity className="h-8 w-8 text-primary" />}
      content={hiitContent}
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
          <label className="block mb-2 text-sm font-medium">Exercise Type</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={exerciseType === "hiit"}
                onChange={() => setExerciseType("hiit")}
                className="mr-2"
              />
              HIIT
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={exerciseType === "steady"}
                onChange={() => setExerciseType("steady")}
                className="mr-2"
              />
              Steady-State
            </label>
          </div>
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
            max="120"
          />
          <p className="text-xs text-gray-500 mt-1">
            {exerciseType === 'hiit' ? 'Typical HIIT sessions are 10-30 minutes' : 'Typical steady-state sessions are 30-60 minutes'}
          </p>
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
            {afterburnCalories !== null && (
              <div className="mt-2 text-sm">
                <p>Afterburn effect (EPOC):</p>
                <p className="font-semibold">+{afterburnCalories} calories over 24 hours</p>
                <p className="text-xs text-gray-600 mt-1">
                  {exerciseType === 'hiit' ? 
                    'HIIT creates a significant afterburn effect due to higher intensity' : 
                    'Steady-state cardio has minimal afterburn effect'}
                </p>
              </div>
            )}
          </div>
        )}
      </form>
    </CalculatorLayout>
  );
};

export default HIITCalculator;
