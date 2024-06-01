import React from 'react';
import './Services.css';

const Services = () => {
  const servicesData = [
    { id: 1, title: "High-Definition Displays", description: "The Innovatech VR Headset offers high-definition displays that bring every detail to life, providing you with a truly immersive experience." },
    { id: 2, title: "Powerful Performance", description: "The Innovatech VR Headset offers high-definition displays that bring every detail to life, providing you with a truly immersive experience." },
    { id: 3, title: "Immersive Display", description: "The Innovatech VR Headset offers high-definition displays that bring every detail to life, providing you with a truly immersive experience." },
    { id: 4, title: "Long-lasting Battery", description: "The Innovatech VR Headset offers high-definition displays that bring every detail to life, providing you with a truly immersive experience." },
    { id: 5, title: "Enhanced Security Features", description: "The Innovatech VR Headset offers high-definition displays that bring every detail to life, providing you with a truly immersive experience." },
    { id: 6, title: "Sleek Design", description: "The Innovatech VR Headset offers high-definition displays that bring every detail to life, providing you with a truly immersive experience." }
  ];

  return (
    <div className="services-container">
      <h2 className="section-title">About Us</h2>
      {servicesData.map(service => (
        <div key={service.id} className="service-card">
          <div className="service-info">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
