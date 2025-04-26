
import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';
import { calculateCalories, MET } from '../../utils/calculatorUtils';
import CalculatorLayout from '../CalculatorLayout';

const WeightliftingCalculator = () => {
  const [weight, setWeight] = useState<number>(70);
  const [isKg, setIsKg] = useState<boolean>(true);
  const [intensity, setIntensity] = useState<string>("moderate");
  const [trainingType, setTrainingType] = useState<string>("strength");
  const [duration, setDuration] = useState<number>(45);
  const [calories, setCalories] = useState<number | null>(null);
  const [afterburnCalories, setAfterburnCalories] = useState<number | null>(null);

  const calculateWeightliftingCalories = () => {
    // Get MET value based on intensity
    let met;
    
    if (trainingType === "strength") {
      met = MET.weightlifting.strength;
    } else if (trainingType === "cardio") {
      met = MET.weightlifting.cardio;
    } else {
      switch (intensity) {
        case "light":
          met = MET.weightlifting.light;
          break;
        case "moderate":
          met = MET.weightlifting.moderate;
          break;
        case "vigorous":
          met = MET.weightlifting.vigorous;
          break;
        default:
          met = MET.weightlifting.moderate;
      }
    }
    
    const result = calculateCalories(weight, met, duration, isKg);
    setCalories(result);
    
    // Calculate afterburn effect (approximately 5-10% of calories burned during exercise for weightlifting)
    // Higher for higher intensity
    let afterburnPercent;
    switch (intensity) {
      case "light": 
        afterburnPercent = 0.05; // 5%
        break;
      case "moderate":
        afterburnPercent = 0.08; // 8%
        break;
      case "vigorous":
        afterburnPercent = 0.10; // 10% 
        break;
      default:
        afterburnPercent = 0.08;
    }
    
    const afterburn = Math.round(result * afterburnPercent * 10);
    setAfterburnCalories(afterburn);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateWeightliftingCalories();
  };
  
  const weightliftingContent = (
    <div className="blog-content">
      <h2>Weightlifting Calorie Burn Calculator: Track Your Strength Training Calories</h2>
      <p>
        Want to know how many calories you burn during weightlifting sessions? Our Weightlifting Calorie 
        Burn Calculator helps you estimate energy expenditure based on workout intensity, duration, body 
        weight, and exercise type. Perfect for bodybuilders, powerlifters, and fitness enthusiasts tracking their gains!
      </p>
      
      <h3>How Does Weightlifting Burn Calories?</h3>
      <p>Unlike cardio, weightlifting burns calories through:</p>
      <ul>
        <li>Muscle activation energy costs</li>
        <li>EPOC (Excess Post-Exercise Oxygen Consumption) - the "afterburn effect"</li>
        <li>Metabolic boost from muscle growth</li>
      </ul>
      
      <p>Key factors affecting calorie burn:</p>
      <ul>
        <li><strong>Body Weight</strong> - More mass requires more energy</li>
        <li><strong>Exercise Intensity</strong> - Heavier weights burn more</li>
        <li><strong>Rest Periods</strong> - Shorter rests increase calorie expenditure</li>
        <li><strong>Compound vs Isolation</strong> - Squats burn more than bicep curls</li>
        <li><strong>Workout Duration</strong> - Longer sessions expend more energy</li>
      </ul>
      
      <h3>Weightlifting vs Cardio: Calorie Burn Comparison</h3>
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Calories/30min (80kg)</th>
            <th>Afterburn Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Weightlifting (vigorous)</td>
            <td>150-200 kcal</td>
            <td>50-100 kcal</td>
          </tr>
          <tr>
            <td>Running (10km/h)</td>
            <td>350-400 kcal</td>
            <td>Minimal</td>
          </tr>
          <tr>
            <td>HIIT</td>
            <td>300-350 kcal</td>
            <td>100-150 kcal</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm italic mt-2">Note: While cardio burns more during the session, weightlifting provides longer metabolic benefits</p>
      
      <h3>Maximizing Calorie Burn Through Weight Training</h3>
      <h4 className="font-semibold mt-3">🔥 Focus on Compound Movements:</h4>
      <ul>
        <li>Squats, deadlifts, bench press</li>
        <li>Burn 2-3× more calories than isolation exercises</li>
      </ul>
      
      <h4 className="font-semibold mt-3">🔥 Implement Supersets & Circuits:</h4>
      <ul>
        <li>Reduce rest periods between sets</li>
        <li>Maintain elevated heart rate</li>
      </ul>
      
      <h4 className="font-semibold mt-3">🔥 Progressive Overload:</h4>
      <ul>
        <li>Gradually increase weights</li>
        <li>Challenges muscles to burn more calories</li>
      </ul>
      
      <h4 className="font-semibold mt-3">🔥 Try Metabolic Conditioning:</h4>
      <ul>
        <li>Combine weights with cardio bursts</li>
        <li>Example: Barbell squats + jump rope intervals</li>
      </ul>
      
      <h3>Frequently Asked Questions</h3>
      <h4 className="font-semibold mt-3">1. How accurate are weightlifting calorie estimates?</h4>
      <p>
        Less precise than cardio calculations due to variable rest periods and intensity fluctuations. 
        Our calculator provides good approximations based on MET values for resistance training.
      </p>
      
      <h4 className="font-semibold mt-3">2. Does muscle mass increase calorie burn?</h4>
      <p>
        Yes! Each pound of muscle burns ~6-10 kcal/day at rest, significantly boosting your metabolism over time.
      </p>
      
      <h4 className="font-semibold mt-3">3. Why does my smartwatch show lower calories than this calculator?</h4>
      <p>
        Most wearables underestimate weightlifting calories because they track heart rate, 
        which doesn't spike as consistently as in cardio.
      </p>
    </div>
  );

  return (
    <CalculatorLayout 
      title="Weightlifting Calorie Calculator" 
      icon={<Dumbbell className="h-8 w-8 text-primary" />}
      content={weightliftingContent}
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
          <label className="block mb-2 text-sm font-medium">Training Type</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={trainingType === "strength"}
                onChange={() => setTrainingType("strength")}
                className="mr-2"
              />
              Strength
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={trainingType === "cardio"}
                onChange={() => setTrainingType("cardio")}
                className="mr-2"
              />
              Cardio
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={trainingType === "custom"}
                onChange={() => setTrainingType("custom")}
                className="mr-2"
              />
              Custom
            </label>
          </div>
        </div>

        {trainingType === "custom" && (
          <div>
            <label className="block mb-2 text-sm font-medium">Workout Intensity</label>
            <select
              value={intensity}
              onChange={(e) => setIntensity(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="light">Light (High reps, low weight)</option>
              <option value="moderate">Moderate (Hypertrophy training)</option>
              <option value="vigorous">Vigorous (Heavy compound lifts)</option>
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
            {afterburnCalories !== null && (
              <div className="mt-2 text-sm">
                <p>Afterburn effect (EPOC):</p>
                <p className="font-semibold">+{afterburnCalories} calories over 24-48 hours</p>
              </div>
            )}
          </div>
        )}
      </form>
    </CalculatorLayout>
  );
};

export default WeightliftingCalculator;
