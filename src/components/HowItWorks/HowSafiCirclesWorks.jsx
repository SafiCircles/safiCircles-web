// HowSafiCirclesWorks.jsx
import React from 'react';
import './HowSafiCirclesWorks.css';
import { image } from '../../constants/images';

const HowSafiCirclesWorks = () => {
  return (
    <div className="content-wrapper">
      <div className="content-container">

        <div className="header">
  
          <div className="top-footprints">
            <img src={image.Footprints} className="footprint-top-left" />
          
          </div>

          <div className="header-text">
            <h1>WAIT, HOW DOES<br />SAFICIRCLES WORK?</h1>
            <p className="subtitle">
              Allow us to walk you step by step on how Saficircles work and how you can start using it today
            </p>
            <p className="tagline">"STEP FORWARD WITH SAFICIRCLES"</p>
          </div>
        </div>


        <div className="steps-wrapper">

        
          <div className="step step-1">
            <div className="step-number">STEP - 1</div>
            <h2>Create or Join a Circle</h2>
            <p>Start a private circle with trusted members or join a public one approved by SafiCircles.</p>
          </div>


          <div className="arrow arrow-1">
           <img src={image.Arrow} alt="Arrow" />
          </div>

          <div className="step step-2">
            <div className="step-number">STEP - 2</div>
            <h2>Contribute Securely</h2>
            <p>Make contributions via mobile money or USSD. Every transaction is verified and recorded.</p>
          </div>


          <div className="arrow arrow-2">
            <img src={image.Arrow} alt="Arrow" />
          </div>

          <div className="step step-3">
            <div className="step-number">STEP - 3</div>
            <h2>Receive Your Payment</h2>
            <p>Get paid on your scheduled turn. Transparent, automated, and logged.</p>
             <div className="quote">"No manual tracking. No disputes. No confusion."</div>
            

            <div className="bottom-footprints">
              <img src={image.Footprints} className="footprint-bottom-left" />
            
            </div>
          </div>

        </div>

       

      </div>
    </div>
  );
};


export default HowSafiCirclesWorks;