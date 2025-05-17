import React, { useEffect, useState } from 'react';

export default function DietChart() {
  const [dietData, setDietData] = useState({ veg: [], nonVeg: [] });
  const [dietType, setDietType] = useState('veg'); // default to veg

  useEffect(() => {
    fetch('/dietPlan.json')
      .then((res) => res.json())
      .then((data) => setDietData(data))
      .catch((err) => console.error('Failed to load diet plan:', err));
  }, []);

  const currentPlan = dietData[dietType] || [];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-black mb-4">Diet Chart</h1>
      <p className="text-center text-gray-700 mb-6">Your personalized {dietType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} meal plan</p>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-10 space-x-4">
        <button
          className={`px-4 py-2 rounded-lg font-medium ${
            dietType === 'veg' ? 'bg-black text-white border' : 'bg-white text-black' 
          }`}
          onClick={() => setDietType('veg')}
        >
          Veg
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium ${
            dietType === 'nonVeg' ? 'bg-black text-white border' : 'bg-white text-black' 
          }`}
          onClick={() => setDietType('nonVeg')}
        >
          Non-Veg
        </button>
      </div>

      {/* Meal Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentPlan.map((meal, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition"
             style={{margin:'10px'}}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{meal.meal}</h3>
            <p className="text-sm text-gray-500 mb-3">{meal.time}</p>
            <div className="text-sm text-gray-700 space-y-1">
              {meal.items.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="mr-2 text-green-500">•</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
