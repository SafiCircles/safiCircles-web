import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from './OnboardingLayout';
import { image } from '../../constants/images';
import { FaCheck, FaTimes } from 'react-icons/fa';

const SignupStep3 = () => {
  const navigate = useNavigate();

  return (
    <OnboardingLayout>
      <div className="step-header">
        <img src={image.safiLogo} alt="Safi Logo" className="step-header-logo" />
        <div className="brand-text-container">
          <span className="brand-safi">Safi</span>
          <span className="brand-circles">Circles</span>
        </div>
      </div>

      <p className="step-title">Welcome! Lets get you signed up</p>

      <div className="onboarding-form">
        <div className="input-container">
          <input type="password" placeholder="Create password" className="input-field" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Confirm Password" className="input-field" />
        </div>
        
        <div className="validation-list">
          <div className="validation-item">
            <FaCheck className="validation-icon" /> At least 8 characters
          </div>
          <div className="validation-item">
            <FaCheck className="validation-icon" /> One uppercase letter
          </div>
          <div className="validation-item">
            <FaTimes className="validation-icon" /> One number or symbol
          </div>
        </div>

        <button className="btn-primary" onClick={() => navigate('/dashboard')}>
          CONTINUE
        </button>
      </div>

      <div className="progress-footer">
        <div className="progress-segment filled"></div>
        <div className="progress-segment filled"></div>
        <div className="progress-segment filled"></div>
      </div>
    </OnboardingLayout>
  );
};

export default SignupStep3;
