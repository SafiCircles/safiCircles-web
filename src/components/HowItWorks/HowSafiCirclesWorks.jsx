// HowSafiCirclesWorks.jsx
import React from 'react';
import './HowSafiCirclesWorks.css';
import { image } from '../../constants/images';
import { motion } from 'framer-motion';

const HowSafiCirclesWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="content-wrapper" id ="how-it-works">
      <div className="content-container">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="top-footprints">
            <img src={image.Footprints} className="footprint-top-left" alt="Footprints" />
          </div>

          <div className="header-text">
            <h1>WAIT, HOW DOES<br />SAFICIRCLES WORK?</h1>
            <p className="subtitle">
              Allow us to walk you step by step on how Saficircles work and how you can start using it today
            </p>
            <p className="tagline">"STEP FORWARD WITH SAFICIRCLES"</p>
          </div>
        </motion.div>

        <motion.div
          className="steps-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="step step-1" variants={itemVariants}>
            <div className="step-number">STEP - 1</div>
            <h2>Create or Join a Circle</h2>
            <p>Start a private circle with trusted members or join a public one approved by SafiCircles.</p>
          </motion.div>

          <motion.div className="arrow arrow-1" variants={itemVariants}>
            <img src={image.Arrow} alt="Arrow" />
          </motion.div>

          <motion.div className="step step-2" variants={itemVariants}>
            <div className="step-number">STEP - 2</div>
            <h2>Contribute Securely</h2>
            <p>Make contributions via mobile money or USSD. Every transaction is verified and recorded.</p>
          </motion.div>

          <motion.div className="arrow arrow-2" variants={itemVariants}>
            <img src={image.Arrow} alt="Arrow" />
          </motion.div>

          <motion.div className="step step-3" variants={itemVariants}>
            <div className="step-number">STEP - 3</div>
            <h2>Receive Your Payment</h2>
            <p>Get paid on your scheduled turn. Transparent, automated, and logged.</p>
            <div className="quote">"No manual tracking. No disputes. No confusion."</div>
            
            <div className="bottom-footprints">
              <img src={image.Footprints} className="footprint-bottom-left" alt="Footprints" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowSafiCirclesWorks;
