import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from './OnboardingLayout';
import { image } from '../../constants/images';
import { FaGlobe, FaChevronDown, FaArrowRight } from 'react-icons/fa';

const Welcome = () => {
  const navigate = useNavigate();

  const [lang, setLang] = useState('English');
  const [showLangs, setShowLangs] = useState(false);

  const languages = [
    { name: 'English', flag: '🇺🇸' },
    { name: 'Kinyarwanda', flag: '🇷🇼' },
    { name: 'French', flag: '🇫🇷' },
  ];

  return (
    <OnboardingLayout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, position: 'relative' }}>
        <img src={image.safiLogo} alt="SafiCircles Logo" className="onboarding-logo" />
        
        <p className="welcome-to-text">Welcome to</p>
        
        <div className="brand-text-container">
          <span className="brand-safi">Safi</span>
          <span className="brand-circles">Circles</span>
        </div>

        <p className="onboarding-desc">
          SafiCircles digitizes Rwanda's Ikibina savings, helping communities save together, track contributions, and grow wealth—simply, transparently, and securely.
        </p>

        <div style={{ position: 'relative', marginBottom: '24px' }}>
          <div className="lang-dropdown" onClick={() => setShowLangs(!showLangs)}>
            <FaGlobe style={{ color: '#0096ff' }} />
            <span>{lang}</span>
            <FaChevronDown style={{ fontSize: '10px', opacity: 0.7 }} />
          </div>

          {showLangs && (
            <div className="country-codes-dropdown" style={{ width: '100%', top: '100%' }}>
              {languages.map(l => (
                <div key={l.name} className="code-option" onClick={() => { setLang(l.name); setShowLangs(false); }}>
                  {l.flag} {l.name}
                </div>
              ))}
            </div>
          )}
        </div>


        <button className="btn-outline-pill" onClick={() => navigate('/signup/step1')}>
          Continue <FaArrowRight style={{ fontSize: '12px' }} />
        </button>
      </div>
    </OnboardingLayout>
  );
};

export default Welcome;
