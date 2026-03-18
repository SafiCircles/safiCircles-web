import React, { useRef } from "react";
import "./Hero.css";
import { image } from "../../constants/images";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

function Hero() {
  const titleRef = useRef(null);

  useGSAP(
    () => {
      if (titleRef.current) {
        // split elements with the class "split" into words and characters
        const split = new SplitType(titleRef.current, { types: "words, chars" });

        // now animate the characters in a staggered fashion
        gsap.from(split.chars, {
          duration: 1,
          y: 100, // animate from 100px below
          autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
          stagger: 0.05, // 0.05 seconds between each
          ease: "power4.out",
        });
      }
    },
    { scope: titleRef }
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="hero" id="home">
      <motion.div
        className="pre-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Plan, Save, Strive with <span>SafiCircles</span>
        </p>
      </motion.div>

      <h1 className="hero-title split" ref={titleRef}>
        Turn Contributions <br />
        Into An Empowerment
      </h1>

      <motion.button
        className="hero-btn"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = '/signup'}
      >
        Join Your Circle <span>→</span>
      </motion.button>

      <motion.div
        className="hero-cards"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="card-hero left-card-hero" variants={itemVariants}>
          <h3>Your Circle Savings</h3>
          <p>Last Update</p>
          <h1>1,200,000 Rwf</h1>
          <p>Total Saved</p>
          <div className="sub-div">
            <div className="color"></div>
            <div>
              <h5>Next Asset Milestone</h5>
              <h4>Eligible for a shared asset purchase</h4>
            </div>
          </div>
        </motion.div>

        <motion.div className="card-hero middle-card-hero" variants={itemVariants}>
          <div className="pill-badge">
            <span className="text-blue">Digital</span> <span className="text-black">IKIBINA</span> <span className="text-blue">System</span>
          </div>
          <h3 className="card-title">
            Tracking <span className="text-blue">100+</span> Contribution In Real Time
          </h3>
          <div className="progress-section">
            <div className="progress-circle-wrapper">
              <svg width="70" height="70" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" className="circle-bg" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="circle-fg"
                  strokeDasharray="263.89"
                  initial={{ strokeDashoffset: 263.89 }}
                  whileInView={{ strokeDashoffset: 15.83 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  strokeLinecap="round"
                />
                <text x="50" y="58" textAnchor="middle" className="circle-text">
                  94%
                </text>
              </svg>
            </div>
            <p className="progress-description">
              Current contributions show this group is ready for a fixed asset investment
            </p>
          </div>
          <img src={image.hands} alt="community" className="bottom-image" />
        </motion.div>

        <motion.div className="card-hero dark" variants={itemVariants}>
          <span className="badge">Best Saving Plan</span>
          <h3>
            From Struggle to <br /> Start Up in seconds
          </h3>
          <button className="secondary-btn">Show me how</button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
