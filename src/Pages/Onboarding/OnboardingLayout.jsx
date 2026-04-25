import React from 'react';
import './Onboarding.css';

const OnboardingLayout = ({ children }) => {
  return (
    <div className="onboarding-wrapper">
      <div className="background-bars">
        {[...Array(18)].map((_, i) => (
          <div key={i} className="bar"></div>
        ))}
      </div>
      <main className="onboarding-main">
        {children}
      </main>
    </div>
  );
};

export default OnboardingLayout;
