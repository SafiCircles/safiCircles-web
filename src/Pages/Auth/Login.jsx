import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Auth.css';
import { image } from '../../constants/images';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/verify');
    };

    return (
        <div className="auth-page-wrapper">
            <div className="auth-split-container">
                {/* Left Side: Form */}
                <div className="auth-form-side">
                    <div className="auth-form-inner">
                        <div className="auth-brand">
                            <img src={image.safiLogo} alt="Logo" />
                            <span>SAFICIRCLES</span>
                        </div>

                        <div className="auth-form-header">
                            <h1>Welcome back</h1>
                            <p>Enter your details to access your dashboard</p>
                        </div>

                        <button className="google-auth-btn">
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
                            Login with Google
                        </button>

                        <div className="auth-separator">
                            <span>or</span>
                        </div>

                        <form className="auth-modern-form" onSubmit={handleSubmit}>
                            <div className="modern-form-group">
                                <label>Email / Phone*</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your email or phone" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="modern-form-group">
                                <label>Password*</label>
                                <input 
                                    type="password" 
                                    placeholder="Enter your password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="auth-options" style={{ marginBottom: '10px' }}>
                                <div className="modern-form-checkbox">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">Remember for 30 days</label>
                                </div>
                                <Link to="/forgot-password" style={{ fontSize: '13px', color: '#666' }}>Forgot password?</Link>
                            </div>

                            <button type="submit" className="modern-submit-btn">
                                Log in
                            </button>
                        </form>

                        <div className="auth-switch">
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visual Content */}
                <div className="auth-visual-side">
                    <div className="visual-content-overlay">
                        <div className="visual-text">
                            <h2>Your Circle, Your Capital, <br /> Your Growth</h2>
                            <p>
                                Reconnect with your savings community and track your 
                                contributions in real-time with absolute transparency.
                            </p>
                        </div>
                        <div className="visual-badges">
                            <div className="visual-badge">
                                <i className="fas fa-shield-alt"></i> Data Protected
                            </div>
                            <div className="visual-badge">
                                <i className="fas fa-users"></i> 10k+ Active Circles
                            </div>
                        </div>
                    </div>
                    <div className="visual-image-bg">
                        <img src={image.group} alt="Community" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
