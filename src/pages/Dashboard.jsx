import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); // 🔹 loading state

  useEffect(() => {
    fetch('/dashbordCardData.json')
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false); // 🔹 data fetched, stop loading
      })
      .catch((err) => {
        console.error('Failed to load cards:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Welcome to Usha Fitness</h1>
      <p className="text-center mb-4">Track your health, fitness, and membership all in one place.</p>

      {loading ? (
        // 🔸 Show loading spinner or text
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-4 mb-4" key={card.id}>
              <div className="card h-100">
                <img src={card.img} className="card-img-top" alt={card.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.desc}</p>
                  <Link to={card.link} className="btn btn-primary mt-auto">Explore</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
