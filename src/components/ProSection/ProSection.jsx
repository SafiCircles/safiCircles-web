// ProSection.jsx
import React from "react";
import "./ProSection.css";
import { motion } from "framer-motion";

const ProSection = () => {
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="pro-section" id="pricing">
      <div className="top-hexagon"></div>
      <div className="pro-container">
        {/* Header */}
        <motion.div
          className="pro-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="pro-label">PRO ACCESS</p>
          <h1>
            Get unlimited features <br />
            at a suitable price
          </h1>
          <p className="pro-subtitle">
            Unlimited access to SafiCircles features with <br />
            a single membership
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          className="pricing-toggle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>Month</span>
          <span className="active">Quarter</span>
          <span>Year</span>
          <span className="save-badge">Save 84%</span>
        </motion.div>

        {/* Cards */}
        <div className="pricing-cards">
          {/* Starter */}
          <motion.div
            className="card-pro starter"
            variants={cardVariantsLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="glow-circle left"></div>
            <h3>Starter</h3>
            <p className="card-pro-sub">For small private circles</p>
            <h2 className="price free">FREE</h2>

            <ul>
              <li>✓ Up to X members</li>
              <li>✓ Basic contribution tracking</li>
              <li>✓ Mobile money integration</li>
              <li>✓ Standard dashboard</li>
              <li>✓ Email notifications</li>
              <li>✓ Free to use</li>
            </ul>

            <button 
              className="card-pro-btn"
              onClick={() => window.location.href = '/signup'}
            >
              GET STARTED
            </button>
          </motion.div>

          {/* Community */}
          <motion.div
            className="card-pro community"
            variants={cardVariantsRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="glow-circle right"></div>
            <h3>Community</h3>
            <p className="card-pro-sub">For growing groups and cooperatives</p>
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

            <button 
              className="card-pro-btn light"
              onClick={() => window.location.href = '/signup'}
            >
              SUBSCRIBE
            </button>
          </motion.div>
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
