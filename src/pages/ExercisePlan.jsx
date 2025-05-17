import React, { useEffect, useState } from 'react';

export default function ExercisePlan() {
  const [todayPlan, setTodayPlan] = useState(null);
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  useEffect(() => {
    fetch('/exerciseSchedule.json')
      .then((response) => response.json())
      .then((data) => {
        setTodayPlan(data[today]);
      })
      .catch((error) => {
        console.error("Failed to load exercise data:", error);
      });
  }, [today]);

  if (!todayPlan) return <div className="p-4">Loading...</div>;

  return (
    <div className="container py-4" style={{margin:'5px' ,padding:'15px'}} >
      <h1 className="mb-4 display-5 fw-bold text-black">Exercise Plan For Today- {todayPlan.title}</h1>

      {todayPlan.exercises.length === 0 ? (
<div className="text-center">
  <p className="text-muted"> <strong>It's your rest day. Take it easy! </strong></p>
  <p className="text-success fw-bold">Congratulations on completing a week of hard work!</p>
  <img
    src="https://www.bing.com/th/id/OGC.2a8c16ba3bac31f0e39648de78e14406?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.co%2fimages%2f2a8c16ba3bac31f0e39648de78e14406%2fraw&ehk=A15W%2bG4lMKdOV2%2fKLkRLcHBvACzzpiv%2b7MEHIPVwHsU%3d"
    alt="Congratulations"
    style={{ width: "300px", marginTop: "20px" }}
  />
</div>


      ) : (
        <div className="row" style={{ margin:'5px' ,padding:'15px'}}>
          {todayPlan.exercises.map((exercise, index) => (
            <div className="col-md-4 mb-4" key={index} >
              <div className="card h-100 shadow-sm">
                <img
                  src={exercise.image}
                  className="card-img-top"
                  alt={exercise.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                 <h5 className="card-title fw-bold ">{exercise.name}</h5>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
