import React from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";
import { image } from "../../constants/images";
import { motion } from "framer-motion";

const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <section className="get-started-section" id="contacts">
      {/* Top inverted half hexagon matching the ProSection style */}
      <div className="top-half-hexagon"></div>

      <div className="get-started-content">
        {/* Left Side: Text and CTA */}
        <motion.div
          className="get-started-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="circle-logo-icon">
            <img src={image.PeopleOnCircle} alt="Circle icon" />
          </div>

          <h1 className="get-started-title">
            Find & Join Your <br />
            <span className="cursive-text">Circle</span> Today !
          </h1>

          <p className="get-started-subtitle">
            There is no stronger relationship than the one <br />
            that is based on financial trust
          </p>

          <div className="cta-wrapper">
            <button 
              className="btn-get-started"
              onClick={() => navigate('/welcome')}
            >
              Get Started
            </button>
            <div className="help-text-box">
              <img src={image.Arrow} alt="Arrow pointing to button" className="arrow-icon" />
              <span className="help-text">Help! Click me n gain</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image with custom clip-path */}
        <motion.div
          className="get-started-image-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="image-wrapper">
            <img src={image.Union} alt="Hands together" />
            <div className="image-slider-indicator">
              <div className="slider-bar">
                <div className="slider-thumb"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
