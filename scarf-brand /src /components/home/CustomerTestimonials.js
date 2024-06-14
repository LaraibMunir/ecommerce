import React from 'react';
import './CustomerTestimonials.css';  // Assuming you have some styles for the customer testimonials

const CustomerTestimonials = () => {
  // Ideally, data would come from props or context, but here's a static example
  const testimonials = [
    { id: 1, name: 'John Doe', quote: 'Best scarves I have ever purchased!' },
    { id: 2, name: 'Jane Smith', quote: 'Amazing quality and beautiful designs.' },
    { id: 3, name: 'Samuel Green', quote: 'I love my new scarf, highly recommend!' },
  ];

  return (
    <div className="customer-testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item">
            <p>"{testimonial.quote}"</p>
            <h3>- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
