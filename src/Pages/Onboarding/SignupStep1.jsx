import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from './OnboardingLayout';
import { image } from '../../constants/images';

const SignupStep1 = () => {
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
          <input type="text" placeholder="Full Name" className="input-field" />
        </div>
        <div className="input-container">
          <input type="text" placeholder="National ID" className="input-field" />
        </div>
        <div className="input-container">
          <input type="text" placeholder="Date of birth" className="input-field" />
        </div>

        <button className="btn-primary" onClick={() => navigate('/signup/step2')}>
          CONTINUE
        </button>
      </div>

      <div className="progress-footer">
        <div className="progress-segment filled"></div>
        <div className="progress-segment"></div>
        <div className="progress-segment"></div>
      </div>
    </OnboardingLayout>
  );
};

export default SignupStep1;
