import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Auth.css';
import { image } from '../../constants/images';

const OTP = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(59);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) setTimer(timer - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const code = otp.join('');
        if (code.length === 6) {
            // Navigate to onboarding
            navigate('/onboarding');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-glass-card otp-card">
                <motion.div 
                    className="auth-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={image.safiLogo} alt="SafiCircles Logo" className="auth-logo" />
                    <h1>Verification</h1>
                    <p>We've sent a 6-digit code to your mobile number</p>
                </motion.div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="otp-inputs">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        ))}
                    </div>

                    <div className="resend-container">
                        <p>Didn't receive code?</p>
                        <button 
                            type="button" 
                            className="resend-btn" 
                            disabled={timer > 0}
                        >
                            Resend Code {timer > 0 && `(0:${timer < 10 ? `0${timer}` : timer})`}
                        </button>
                    </div>

                    <motion.button 
                        type="submit" 
                        className="auth-btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Verify
                    </motion.button>
                </form>
            </div>

            {/* Decorative Elements */}
            <div className="auth-glow auth-glow-1"></div>
            <div className="auth-glow auth-glow-2"></div>
        </div>
    );
};

export default OTP;
