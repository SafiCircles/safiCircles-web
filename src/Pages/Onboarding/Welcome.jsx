import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from './OnboardingLayout';
import { image } from '../../constants/images';
import { FaGlobe, FaChevronDown, FaArrowRight } from 'react-icons/fa';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <OnboardingLayout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <img src={image.safiLogo} alt="SafiCircles Logo" className="onboarding-logo" />
        
        <p className="welcome-to-text">Welcome to</p>
        
        <div className="brand-text-container">
          <span className="brand-safi">Safi</span>
          <span className="brand-circles">Circles</span>
        </div>

        <p className="onboarding-desc">
          SafiCircles digitizes Rwanda's Ikibina savings, helping communities save together, track contributions, and grow wealth—simply, transparently, and securely.
        </p>

        <div className="lang-dropdown">
          <FaGlobe style={{ color: '#0096ff' }} />
          <span>English</span>
          <FaChevronDown style={{ fontSize: '10px', opacity: 0.7 }} />
        </div>

        <button className="btn-outline-pill" onClick={() => navigate('/signup/step1')}>
          Continue <FaArrowRight style={{ fontSize: '12px' }} />
        </button>
      </div>
    </OnboardingLayout>
  );
};

export default Welcome;
