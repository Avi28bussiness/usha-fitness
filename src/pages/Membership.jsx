import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';


export default function Membership() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/membershipPlans.json')
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((err) => console.error('Failed to load membership plans:', err));
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return Array.from({ length: fullStars }, (_, i) => (
      <Star
        key={i}
        className="w-4 h-4 text-yellow-500 inline mr-1"
        fill="currentColor"
      />
    ));
  };

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-black text-center">
          Membership Plans
        </h1>
        <p className="text-gray-600 mb-8 text-center text-sm">
          Choose a plan that suits your fitness goals.
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {plans.map((plan) => (
            <div style={{margin:"10px", borderRadius:"5px"}}
              key={plan.id}
              className={`bg-white rounded-xl border shadow-sm hover:shadow-lg transition-transform hover:scale-105 flex flex-col justify-between ${
                plan.hoverHighlight ? 'border-green-500 shadow-green-200' : ''
              }`}
            >

              {/* Card Header */}
              <div className="flex justify-between items-center bg-gray-100 px-4 py-2">
<h3 className="text-sm font-semibold text-danger">
  {plan.duration}
</h3>

                <div style={{marginLeft:'30%'}}>
                 <img
    src="https://th.bing.com/th/id/OIP.u3gQBc0KTwTZsnbsuig0kgAAAA?rs=1&pid=ImgDetMain"
    alt="Membership"
    className="h-full object-contain"
    
  />
  </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-grow text-center">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    {plan.savings && (
                  <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full">
                    Save {plan.savings}
                  </span>
                )}
                </div>
                  <p className="text-lg font-bold text-black">{plan.price}</p>
                  <div className="flex items-center">
                    <div className="text-sm">{renderStars(plan.rating)}</div>
                  </div>
                </div>

                {plan.badge && (
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full font-medium">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Features */}
                <div className="text-gray-700 text-sm mt-3 space-y-1">
                  {plan.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <span className="mr-2 text-green-500">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
