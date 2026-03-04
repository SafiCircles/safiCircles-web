// ProSection.jsx
import React from "react";
import "./ProSection.css";

const ProSection = () => {
  return (
    <section className="pro-section">
      <div className="pro-container">

        {/* Header */}
        <div className="pro-header">
          <p className="pro-label">PRO ACCESS</p>
          <h1>
            Get unlimited features <br />
            at a suitable price
          </h1>
          <p className="pro-subtitle">
            Unlimited access to SafiCircles features with <br />
            a single membership
          </p>
        </div>

        {/* Toggle */}
        <div className="pricing-toggle">
          <span>Month</span>
          <span className="active">Quarter</span>
          <span>Year</span>
          <span className="save-badge">Save 84%</span>
        </div>

        {/* Cards */}
        <div className="pricing-cards">

          {/* Starter */}
          <div className="card starter">
            <div className="glow-circle left"></div>
            <h3>Starter</h3>
            <p className="card-sub">For small private circles</p>
            <h2 className="price free">FREE</h2>

            <ul>
              <li>✓ Up to X members</li>
              <li>✓ Basic contribution tracking</li>
              <li>✓ Mobile money integration</li>
              <li>✓ Standard dashboard</li>
              <li>✓ Email notifications</li>
              <li>✓ Free to use</li>
            </ul>

            <button className="card-btn"></button>
          </div>

          {/* Community */}
          <div className="card community">
            <div className="glow-circle right"></div>
            <h3>Community</h3>
            <p className="card-sub">
              For growing groups and cooperatives
            </p>
            <p className="popular">MOST POPULAR</p>
            <h2 className="price">$20</h2>

            <ul>
              <li>✓ Unlimited members</li>
              <li>✓ Voting system</li>
              <li>✓ Advanced reporting</li>
              <li>✓ Audit trail access</li>
              <li>✓ Multi-language support</li>
              <li>✓ Priority support</li>
            </ul>

            <button className="card-btn light">Upgrade</button>
            
          </div>
         

        </div>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>

      </div>
    </section>
  );
};

export default ProSection;