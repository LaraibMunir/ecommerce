import React from 'react';
import './FeaturedCollections.css';  // Assuming you have some styles for the featured collections

const FeaturedCollections = () => {
  // Ideally, data would come from props or context, but here's a static example
  const collections = [
    { id: 1, name: 'Winter Collection', image: 'winter-collection.jpg' },
    { id: 2, name: 'Silk Scarves', image: 'silk-scarves.jpg' },
    { id: 3, name: 'Limited Editions', image: 'limited-editions.jpg' },
  ];

  return (
    <div className="featured-collections">
      <h2>Featured Collections</h2>
      <div className="collections-grid">
        {collections.map(collection => (
          <div key={collection.id} className="collection-item">
            <img src={`/assets/images/image(1)`} alt={collection.name} />

            <h3>{collection.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollections;
