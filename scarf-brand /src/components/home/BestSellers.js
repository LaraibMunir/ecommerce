import React from 'react';
import './BestSellers.css';  // Assuming you have some styles for the best sellers

const BestSellers = () => {
  // Ideally, data would come from props or context, but here's a static example
  const bestSellers = [
    { id: 1, name: 'Scarf X', image: 'scarf-x.jpg', price: '$80' },
    { id: 2, name: 'Scarf Y', image: 'scarf-y.jpg', price: '$90' },
    { id: 3, name: 'Scarf Z', image: 'scarf-z.jpg', price: '$100' },
  ];

  return (
    <div className="best-sellers">
      <h2>Best Sellers</h2>
      <div className="sellers-grid">
        {bestSellers.map(item => (
          <div key={item.id} className="seller-item">
            <img src={`/assets/images/image(1)`} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
