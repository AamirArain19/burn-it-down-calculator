
export type ActivityLevel = 'light' | 'moderate' | 'vigorous';

// MET values for different activities
export const MET = {
  // Walking METs by speed
  walking: {
    slow: 2.8, // ~2.5 mph
    moderate: 3.3, // ~3.0 mph
    brisk: 3.8, // ~3.5 mph
    fast: 4.3, // ~4.0+ mph
  },
  // Running METs by speed
  running: {
    light: 7.0, // ~5 mph
    moderate: 9.8, // ~6-7 mph
    vigorous: 12.3, // ~8+ mph
    treadmill: 8.5, // Average for treadmill running
  },
  // Cycling METs by intensity
  cycling: {
    light: 5.0, // ~10 mph
    moderate: 7.5, // ~12-14 mph
    vigorous: 10.0, // ~16+ mph
    stationary: 7.0, // Stationary bike
  },
  // Swimming METs by stroke/intensity
  swimming: {
    leisure: 6.0,
    freestyle_moderate: 8.0,
    freestyle_vigorous: 10.0,
    breaststroke: 7.0,
    butterfly: 11.0, 
    backstroke: 6.0,
  },
  // Weightlifting METs by intensity
  weightlifting: {
    light: 3.0,
    moderate: 4.0,
    vigorous: 6.0,
    strength: 5.0,
    cardio: 6.5,
  },
  // HIIT vs Steady-state
  cardio: {
    hiit: 8.5,
    steady_state: 6.0,
  },
  // Yoga/Pilates METs by type
  mindful: {
    hatha_yoga: 3.0,
    power_yoga: 5.0,
    hot_yoga: 7.0,
    mat_pilates: 3.5,
    reformer_pilates: 4.5,
  },
  // Household chores METs
  household: {
    mopping: 3.5,
    vacuuming: 3.0,
    scrubbing: 4.0,
    gardening: 4.5,
    laundry: 2.0,
  },
  // Hiking METs by difficulty
  hiking: {
    easy: 4.0,
    moderate: 6.0,
    difficult: 8.0,
    mountaineering: 10.0,
  },
  // Non-exercise activity METs
  neat: {
    standing: 2.0,
    walking_slow: 2.5,
    fidgeting: 1.5,
    shopping: 3.0,
    cooking: 2.5,
    playing_kids: 4.0,
  }
};

export const calculateCalories = (
  weight: number, // in kg
  met: number,
  duration: number, // in minutes
  isKg: boolean = true
): number => {
  // Convert lbs to kg if needed
  const weightInKg = isKg ? weight : weight / 2.205;
  
  // Formula: calories = MET * weight (kg) * time (hours)
  const timeInHours = duration / 60;
  const calories = met * weightInKg * timeInHours;
  
  return Math.round(calories);
};
