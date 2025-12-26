import React from "react";
import "./Features.css";

function FeatureCard({ icon, title, text, dark }) {
  return (
    <div className={`feature-card ${dark ? "dark" : ""}`}>
      <div className="icon-wrapper">
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{text}</p>

      <a href="#">Learn More</a>
    </div>
  );
}

export default FeatureCard;
