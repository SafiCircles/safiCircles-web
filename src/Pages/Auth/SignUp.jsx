import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Auth.css';
import { image } from '../../constants/images';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                            <h1>Create your account</h1>
                            <p>Start your financial empowerment journey today</p>
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
                                <label>Name*</label>
                                <input 
                                    type="text" 
                                    name="fullName"
                                    placeholder="Enter your name" 
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="modern-form-group">
                                <label>Email*</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter your email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="modern-form-group">
                                <label>Password*</label>
                                <input 
                                    type="password" 
                                    name="password"
                                    placeholder="Enter your password" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="modern-form-checkbox">
                                <input type="checkbox" id="terms" required />
                                <label htmlFor="terms">I agree to all Term, Privacy Policy and Fees</label>
                            </div>

                            <button type="submit" className="modern-submit-btn">
                                Sign Up
                            </button>
                        </form>

                        <div className="auth-switch">
                            Already have an account? <Link to="/login">Log in</Link>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visual Content */}
                <div className="auth-visual-side">
                    <div className="visual-content-overlay">
                        <div className="visual-text">
                            <h2>Building the Best Financial <br /> Trust for Your Future</h2>
                            <p>
                                Join thousands of users who are revolutionizing traditional savings 
                                with our digital Ikibina system and secure shared contributions.
                            </p>
                        </div>
                        <div className="visual-badges">
                            <div className="visual-badge">
                                <i className="fas fa-check-circle"></i> 100% Secure
                            </div>
                            <div className="visual-badge">
                                <i className="fas fa-mobile-alt"></i> Mobile Money Linked
                            </div>
                        </div>
                    </div>
                    <div className="visual-image-bg">
                        <img src={image.hands} alt="Empowerment" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
