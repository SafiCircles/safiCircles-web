import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import OnboardingLayout from './OnboardingLayout';
import { image } from '../../constants/images';

const SignupStep2 = () => {
  const navigate = useNavigate();
  const [provider, setProvider] = useState('MTN MoMo');
  const [paymentPhone, setPaymentPhone] = useState(() => localStorage.getItem('userPhone') || '');


  return (
    <OnboardingLayout>
      <div className="step-header">
        <img src={image.safiLogo} alt="Safi Logo" className="step-header-logo" />
        <div className="brand-text-container">
          <span className="brand-safi">Safi</span>
          <span className="brand-circles">Circles</span>
        </div>
      </div>

      <p className="step-title">Welcome! Let's get you signed up</p>

      <div className="onboarding-form">
        <div className="input-container">
          <input type="text" placeholder="Full Name" className="input-field" />
        </div>
        <div className="input-container">
          <input type="text" placeholder="National ID" className="input-field" />
        </div>
        
        <div className="input-container">
          <label className="provider-label" style={{ display: 'block', marginBottom: '8px' }}>Payment Phone Number</label>
          <input 
            type="tel" 
            placeholder="Payment Phone Number" 
            className="input-field" 
            value={paymentPhone}
            onChange={(e) => setPaymentPhone(e.target.value)}
          />
        </div>

        <p className="provider-label">Mobile Money Provider</p>
        <div className="provider-row">
          <div 
            className={`provider-card ${provider === 'MTN MoMo' ? 'selected' : ''}`}
            onClick={() => setProvider('MTN MoMo')}
          >
            MTN MoMo
          </div>
          <div 
            className={`provider-card ${provider === 'Airtel Money' ? 'selected' : ''}`}
            onClick={() => setProvider('Airtel Money')}
          >
            Airtel Money
          </div>
        </div>

        <button className="btn-primary" onClick={() => navigate('/signup/step3')}>
          CONTINUE
        </button>
      </div>

      <div className="progress-footer onboarding-footer-spacer">
        <div className="progress-segment filled"></div>
        <div className="progress-segment filled"></div>
        <div className="progress-segment"></div>
      </div>
    </OnboardingLayout>
  );
};

export default SignupStep2;

