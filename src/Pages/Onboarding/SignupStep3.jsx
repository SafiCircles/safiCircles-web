import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from './OnboardingLayout';
import { image } from '../../constants/images';
import { FaCheck, FaTimes } from 'react-icons/fa';

const SignupStep3 = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const rules = [
    { label: 'At least 8 characters', valid: pass.length >= 8 },
    { label: 'One uppercase letter', valid: /[A-Z]/.test(pass) },
    { label: 'One number or symbol', valid: /[0-9!@#$%^&*]/.test(pass) },
  ];

  const allValid = rules.every(r => r.valid) && pass === confirm && pass !== '';

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
          <input 
            type="password" 
            placeholder="Create password" 
            className="input-field" 
            value={pass}
            onChange={e => setPass(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="input-field" 
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
          />
        </div>
        
        <div className="validation-list">
          {rules.map((r, i) => (
            <div key={i} className="validation-item">
              {r.valid ? <FaCheck className="validation-icon" /> : <FaTimes className="validation-icon" />}
              {r.label}
            </div>
          ))}
          {pass !== confirm && confirm !== '' && (
            <div className="validation-item" style={{ color: '#ffb3b3' }}>
              <FaTimes className="validation-icon" /> Passwords do not match
            </div>
          )}
        </div>

        <button className="btn-primary" onClick={() => navigate('/dashboard')} disabled={!allValid}>
          CONTINUE
        </button>
      </div>


      <div className="progress-footer onboarding-footer-spacer">
        <div className="progress-segment filled"></div>
        <div className="progress-segment filled"></div>
        <div className="progress-segment filled"></div>
      </div>
    </OnboardingLayout>
  );
};

export default SignupStep3;
