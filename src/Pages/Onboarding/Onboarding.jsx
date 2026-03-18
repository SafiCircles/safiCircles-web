import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Onboarding.css';
import { image } from '../../constants/images';

const Onboarding = () => {
    const navigate = useNavigate();

    return (
        <div className="onboarding-container">
            <div className="onboarding-content">
                <motion.div 
                    className="onboarding-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={image.safiLogo} alt="SafiCircles Logo" className="onboarding-logo" />
                    <h1>Welcome, Empowerment Awaits!</h1>
                    <p>How would you like to start today?</p>
                </motion.div>

                <div className="onboarding-grid">
                    <motion.div 
                        className="onboarding-card create"
                        whileHover={{ y: -10, scale: 1.02 }}
                        onClick={() => navigate('/dashboard')}
                    >
                        <div className="card-icon">
                            <i className="fas fa-plus-circle"></i>
                        </div>
                        <h2>Create a Circle</h2>
                        <p>Be the leader. Start a new savings group and invite your trusted community.</p>
                        <ul className="card-features">
                            <li>✓ Set your own rules</li>
                            <li>✓ Custom contribution rates</li>
                            <li>✓ Invite via link or QR</li>
                        </ul>
                        <button className="onboarding-btn">Start a Circle</button>
                    </motion.div>

                    <motion.div 
                        className="onboarding-card join"
                        whileHover={{ y: -10, scale: 1.02 }}
                        onClick={() => navigate('/dashboard')}
                    >
                        <div className="card-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h2>Join a Circle</h2>
                        <p>Join an existing trusted group and reach your goals together with others.</p>
                        <ul className="card-features">
                            <li>✓ Join via invite code</li>
                            <li>✓ Explore public circles</li>
                            <li>✓ Guaranteed payout turns</li>
                        </ul>
                        <button className="onboarding-btn">Join a Circle</button>
                    </motion.div>
                </div>

                <div className="onboarding-footer">
                    <button className="skip-btn" onClick={() => navigate('/dashboard')}>Maybe later, take me to Dashboard</button>
                </div>
            </div>

            <div className="onboarding-glow"></div>
        </div>
    );
};

export default Onboarding;
