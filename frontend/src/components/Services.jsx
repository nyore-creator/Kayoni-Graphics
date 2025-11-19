import React from "react";
import "../style.css";

const Services = () => {
  const services = [
    {
      icon: "🎨",
      title: "Graphic Design",
      description:
        "We design posters, banners, logos, certificates and all branding materials.",
    },
    {
      icon: "🖨️",
      title: "Printing Services",
      description:
        "High-quality printing for brochures, flyers, business cards, banners, stickers and more.",
    },
    {
      icon: "🪪",
      title: "Branding",
      description:
        "T-shirts, Jerseys, Caps, Reflectors, Overalls, hoodies, notebooks, diaries, and more.",
    },
    {
      icon: "💻",
      title: "Cyber Services",
      description:
        "Online applications, KRA services, NSSF, NHIF, HELB and general online work.",
    },
    {
      icon: "📄",
      title: "Typing & Printing",
      description:
        "Professional document typing, editing and high-quality printing.",
    },
    {
      icon: "📑",
      title: "Lamination & Binding",
      description:
        "Protect your documents with hot lamination and secure binding.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
